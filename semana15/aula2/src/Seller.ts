import Employee from './Employee'
export default class Seller extends Employee {
    salesQuantity: number = 0
    static SELLING_COMMISSION: number = 5

    public setSalesQuantity(amount: number): void {
        this.salesQuantity = this.salesQuantity + amount
        console.log(`Acionado o valor de ${amount} ao total de vendas do vendedor. O novo total é: ${this.getSalesQuantity()}`)
    }
    public getSalesQuantity(): number {
        return this.salesQuantity
    }
    public calculateTotalSalary(): number {
        return (this.baseSalary) + (Employee.BENEFITS_VALUE) + (Seller.SELLING_COMMISSION)*(this.salesQuantity)
    }
}


// constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     admissionDate: Date,
//     baseSalary: number
// ) {
//     super(id, email, name, password, admissionDate, baseSalary);
//     console.log("Chamando o construtor da classe Seller");
// }