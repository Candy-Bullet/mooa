interface IAppOption {
  name: string;
  selector: string;
  baseScriptUrl: string;
  styles: string[];
  scripts: string[];
  prefix: string;
}

interface MooaApp {
  appConfig: IAppOption;
  status: string;
  bootstrap: () => {};
  load: () => {};
  mount: () => {};
  unload: () => {};
  unmount: () => {};
  timeouts: () => {};
}
