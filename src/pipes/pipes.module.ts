import { NgModule } from '@angular/core';
import { YourPipeNamePipe } from './your-pipe-name/your-pipe-name';
@NgModule({
	declarations: [YourPipeNamePipe],
	imports: [],
	exports: [YourPipeNamePipe]
})
export class PipesModule {}
