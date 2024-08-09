import { Component, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Observable, Subscription } from 'rxjs';
import { Policy } from '../model/policy.model';
import { PoliciesService } from '../services/policies.service';
import { Router } from '@angular/router';
import { MatLine } from '@angular/material/core';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.css'
})
export class PolicyListComponent implements OnInit, OnDestroy {

  policyID: number | null = null;
  policies$?: Observable<Policy[]>;
  deletePolicySubscription?: Subscription;
  constructor(private policiesService: PoliciesService, private router: Router) { }

  readonly panelOpenState = signal(false);

  ngOnInit(): void {
    this.policies$ = this.policiesService.getAllPolicies();
  }
  // getPolicyDescLines(description: string): string[] {
  //   const splitDescription = description.split('\n');
  //   return splitDescription.filter(line => line.trim() !== '').map(line => line.trim());
  // }

  onDelete(): void {
    if (this.policyID) {
      //Call service to delete policy
      this.deletePolicySubscription = this.policiesService.deletePolicy(this.policyID)
        .subscribe({
          next: (response) => {
            this.ngOnInit(); //to refresh the policy list
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.deletePolicySubscription?.unsubscribe();
  }
}
