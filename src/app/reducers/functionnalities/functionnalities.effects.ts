import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of } from "rxjs";
import { FunctionnalitiesService } from "@shared/services/functionnalities/functionnalities.service";
import { fetchFunctionnalities, fetchFunctionnalitiesSuccess, functionnalitiesFailure } from "./functionnalities.actions";

@Injectable()
export class FunctionnalityEffects {

    loadFunctionnalities$ = createEffect(() => this.actions$.pipe(
        ofType(fetchFunctionnalities),
        mergeMap(() => {            
            return this.functionnalitiesService.fetchSoftwares().pipe(
                map(functionnalities => fetchFunctionnalitiesSuccess({ functionnalities: functionnalities })),
                catchError(error => of(functionnalitiesFailure(error)))
            )
        })
    ));

    constructor(private actions$: Actions, private functionnalitiesService: FunctionnalitiesService, private readonly store: Store) { }
}