class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    set accountNumber(value) {
        this.#accountNumber = value;
    }

    get accountNumber() {
        return this.#accountNumber;
    }

    set balance(value) {
        this.#balance = value;
    }

    get balance() {
        return this.#balance;
    }

    set accountHolderName(value) {
        this.#accountHolderName = value;
    }

    get accountHolderName() {
        return this.#accountHolderName;
    }

    displayDetails() {
        console.log(`Account Number: ${this.#accountNumber}, Account Holder: ${this.#accountHolderName}, Balance: ${this.#balance}`);
    }
}

function main() {
    const account = new BankAccount();
    account.accountNumber = "123456789";
    account.balance = 5000;
    account.accountHolderName = "John Doe";

    console.log(account.balance) ;
}

main();
