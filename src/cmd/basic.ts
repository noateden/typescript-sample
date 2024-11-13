export class BasicCommand {
  public readonly name: string = 'command';
  public readonly describe: string = 'Basic command';

  constructor() {}

  public async getServices(): Promise<any> {
    return null;
  }

  public async execute(argv: any) {}
  public setOptions(yargs: any) {}
}
