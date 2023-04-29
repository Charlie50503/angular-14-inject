import { inject } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs";
export const getRouteParam = (id: string) => {
  const route = inject(ActivatedRoute);
  return route.paramMap.pipe(
    map(paramMap => paramMap.get(id))
  );
}
