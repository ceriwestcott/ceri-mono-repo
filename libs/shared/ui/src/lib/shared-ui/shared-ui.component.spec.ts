import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { SharedUiComponent } from './shared-ui.component';

describe('ButtonComponent', () => {
  let spectator: Spectator<SharedUiComponent>;
  const createComponent = createComponentFactory(SharedUiComponent);

  beforeEach(() => (spectator = createComponent()));
});
