import { BasicCommand } from './basic';

export class TestCommand extends BasicCommand {
  public readonly name: string = 'test';
  public readonly describe: string = 'Run test command';

  constructor() {
    super();
  }

  public async execute(argv: any) {
    console.log(argv.message);

    process.exit(0);
  }

  public setOptions(yargs: any) {
    return yargs.option({
      message: {
        alias: 'm',
        type: 'string',
        default: 'test message',
        describe: 'Give a message to print to console.',
      },
    });
  }
}
