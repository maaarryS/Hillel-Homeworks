class Burger {
  static TOPPINGS = {
    mayoo: { price: 10, ccal: 100 },
    cheese: { price: 15, ccal: 85 },
    free: { price: 8, ccal: 90 }
  }

  static SIZES = {
    small: "small",
    medium: "medium",
    extra: "extra"
  }

  constructor(size) {
    this.size = size;
    this.toppings = [];
    this.properties = {
      [Burger.SIZES.small]: {
        price: 50,
        ccal: 250
      },
      [Burger.SIZES.medium]: {
        price: 70,
        ccal: 400
      },
      [Burger.SIZES.large]: {
        price: 85,
        ccal: 580
      }
    }

    this.init();
  }

  init() {
    const sizeProp = this.properties[this.size];
    this.price = sizeProp ? sizeProp.price : 0;
    this.ccal = sizeProp ? sizeProp.ccal : 0;
  }

  getPrice() {
    return this.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
  }

  getCcal() {
    return this.ccal + this.toppings.reduce((acc, e) => acc + e.ccal, 0);
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}


class CheeseBurger extends Burger {
  constructor(size) {
    super();
    this.size = size;
    this.properties = {
      [Burger.SIZES.small]: {
        price: 60,
        ccal: 320
      },
      [Burger.SIZES.medium]: {
        price: 80,
        ccal: 450
      },
      [Burger.SIZES.large]: {
        price: 90,
        ccal: 620
      }
    }

    this.init();

}

}

class FishBurger extends Burger {
  constructor(size) {
    super();
    this.size = size;
    this.properties = {
      [Burger.SIZES.small]: {
        price: 65,
        ccal: 290
      },
      [Burger.SIZES.medium]: {
        price: 70,
        ccal: 380
      },
      [Burger.SIZES.large]: {
        price: 80,
        ccal: 560
      }
    }

    this.init();
}
}

class KingBurger extends Burger {
  constructor(size) {
    super();
    this.size = size;
    this.properties = {
      [Burger.SIZES.small]: {
        price: 75,
        ccal: 340
      },
      [Burger.SIZES.medium]: {
        price: 85,
        ccal: 410
      },
      [Burger.SIZES.large]: {
        price: 100,
        ccal: 600
      }
    }

    this.init();
}
}

const newBurgerForMe = new FishBurger(Burger.SIZES.medium);

newBurgerForMe.addTopping(Burger.TOPPINGS.free);
newBurgerForMe.addTopping(Burger.TOPPINGS.cheese);
newBurgerForMe.addTopping(Burger.TOPPINGS.cheese);

console.log("We spend:", newBurgerForMe.getPrice());
console.log("We got:", newBurgerForMe.getCcal());

console.log(newBurgerForMe);