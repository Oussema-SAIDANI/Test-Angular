export class Client {
  constructor(
    public id?: number,
    public titre?: string,
    public nom?: string,
    public prenom?: string,
    public tel?: number,
    public email?: string,
    public observation?: string,
    public linkedin?: string,
    public rappel?: Date
  ) {}
}
