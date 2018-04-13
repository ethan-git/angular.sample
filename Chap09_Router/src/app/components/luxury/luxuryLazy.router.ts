// luxuryLazy.router.ts

import { RouterModule } from "@angular/router";
import { LuxuryLazyComponent } from "./luxuryLazy.component";

export const luxuryLazyRouter = RouterModule.forChild([
    { path: 'luxuryLazy', component: LuxuryLazyComponent }
])