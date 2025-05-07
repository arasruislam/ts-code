function formatString(input: string, toUpper?: boolean): string {
   if (toUpper) {
      console.log(input.toUpperCase());
      return input.toUpperCase();
   } else {
      console.log(input.toLowerCase());
      return input.toLowerCase();
   }
}

formatString("hello");
formatString("hello", true);
formatString("Hello", false);

function filterByRating(
   items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
   return items.filter((item) => item.rating > 4);
}

const books = [
   { title: "Book A", rating: 4.5 },
   { title: "Book B", rating: 3.2 },
   { title: "Book C", rating: 5.0 },
];
filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
   return arrays.reduce((prev, curr) => [...prev, ...curr], []);
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

class Vehicle {
   // private make: string;
   // private year: number;

   constructor(private make: string, private year: number) {
      this.make = make;
      this.year = year;
   }

   getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
   }
}

class Car extends Vehicle {
   private model: string;
   constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
   }

   getModel() {
      console.log(`Model: ${this.model}`);
   }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();


function processValue(value: string | number): number {
   if (typeof value === "string") {
      console.log(value.length);
      return value.length;
   } else {
      console.log(value * 2);
      return value * 2;
   }
}
processValue("hello");
processValue(10);
