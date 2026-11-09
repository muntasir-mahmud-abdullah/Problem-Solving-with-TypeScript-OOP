function multiplyValue(value: number, multiplier?: number): number {
  let result = 1;
  if (multiplier !== undefined) {
    result = value * multiplier;
  }
  if (multiplier === undefined) {
    result = value * 2;
  }
  return result;
}

function processInput(
  value: string | number | boolean,
): string | number | null {
  let result = null;
  if (typeof value === "string") {
    result = value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    result = value * 10;
  }
  if (typeof value === "boolean") {
    result = value ? "Acitve" : "Inactive";
  }
  return result;
}

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let array: T[] = [];
  const combined = array.concat(...arrays);
  return combined;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  let popularCourses: Course[] = [];
  for (let course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  let values = [];
  for (let item of items) {
    values.push(item[key]);
  }
  return values;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  const validAge = 18;
  try{
  return await new Promise<string>((resolve, reject) => {
          setTimeout(()=>{
        if (age >= validAge) {
      resolve("Access Granted");
    } else {
      reject(new Error("Error: Access Denied: Must be 18 or older"));
    }
  },1000)
  });}
  catch(error){
    if(error instanceof Error){
      return error.message;
    }
    return "Error: Access Denied: Must be 18 or older";
  }
}

