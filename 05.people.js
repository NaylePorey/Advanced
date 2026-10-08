const companyModule = (function () {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new TypeError('Cannot construct Abstract instances directly');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this._taskIndex = 0;
        }

        work() {
            if (this.tasks.length === 0) return;
            console.log(`${this.name}${this.tasks[this._taskIndex]}`);
            this._taskIndex = (this._taskIndex + 1) % this.tasks.length;
        }

        collectSalary() {
            const totalSalary = this.salary + (this.dividend || 0);
            console.log(`${this.name} received ${totalSalary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
})();