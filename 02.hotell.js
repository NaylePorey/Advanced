class Hotel {
    constructor(initialBudget) {
        this.initialBudget = Number(initialBudget);
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        const messages = [];

        for (const supply of supplies) {
            let [name, quantity, price] = supply.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.initialBudget) {
                this.initialBudget -= price;
                this.supplyStock[name] = (this.supplyStock[name] || 0) + quantity;
                messages.push(`Successfully stocked ${quantity} ${name}`);
            } else {
                messages.push(`There was not enough money to restock ${quantity} ${name}`);
            }
        }

        return messages.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        pricePerNight = Number(pricePerNight);


        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        const parsedSupplies = [];
        for (const supplyStr of neededSupplies) {
            let [supplyName, supplyQuantity] = supplyStr.split(' ');
            parsedSupplies.push({
                name: supplyName,
                quantity: Number(supplyQuantity)
            });
        }

        this.roomAvailability[roomType] = {
            neededSupplies: parsedSupplies,
            pricePerNight: pricePerNight
        };

        const totalRoomTypes = Object.keys(this.roomAvailability).length;

        return `Great idea! Now with the ${roomType}, we have ${totalRoomTypes} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        const roomKeys = Object.keys(this.roomAvailability);

        if (roomKeys.length === 0) {
            return "Our rooms are not ready yet, please come back later...";
        }

        const result = [];
        for (const roomType of roomKeys) {
            const price = this.roomAvailability[roomType].pricePerNight;
            result.push(`${roomType} - $ ${price}`);
        }

        return result.join('\n');
    }

    bookRoom(roomType) {
    
        if (!this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        const room = this.roomAvailability[roomType];


        for (const supply of room.neededSupplies) {
            const stockQuantity = this.supplyStock[supply.name] || 0;
          
            if (stockQuantity < supply.quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
    }
}