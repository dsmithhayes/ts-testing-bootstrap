export default class Example {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getNameInAllCaps(): string {
        return this.name.toUpperCase();
    }
}
