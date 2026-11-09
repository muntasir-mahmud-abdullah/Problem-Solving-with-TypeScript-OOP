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

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];
function pluckValues<T, K extends keyof T>(items:T[],key:K) {
    let values = [];
    for(let user of items){
        values.push(user[key]);
    }
    return values;
}
console.log(pluckValues(users, "role")) ;

