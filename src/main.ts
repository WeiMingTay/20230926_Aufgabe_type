type Student = {
    firstName: string
    lastName: string
    age: number
    report: schoolReport[];
}
type schoolReport = {
    class: "Kunst" | "Biologie" | "Chemie" | "Geologie"
    grade: grades[]
}
type grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

function printStudent(student: Student) {
    let name = student.firstName + " " + student.lastName + " (" + student.age + ")"
    let noten = student.report.map(r => r.class + ": " + r.grade.map(note => ((note !== undefined) ? note : '*')).join(", ") + "\n").join("")
    console.log("%c" +
        name + "\n" +
        '='.repeat(name.length - 2) + "\n" +
        "Noten:\n" +
        noten,
        "font-family: system-ui; color: hotpink")
}

// + student.report.map(note => ((note !== undefined) ? note.toString() : '*')).join(", ")
function printStudentList(studentList: Student[]) {
    for (let student of studentList) {
        printStudent(student)
    }
}

//*
// function averageGrade(studentList: Student[]) {
//
//
//     for (let student of studentList) {
//         const validGrades = student.report.filter(note => (note.grade !== undefined)).map(note => note.grade)
//         console.log(validGrades)
//         if (validGrades.length === 0) {
//             return 0;
//         }
//         const sum = validGrades.reduce((acc, grade) => {
//             if (typeof grade === "number") {
//                 return acc + grade;
//             } else if (grade === "A") {
//                 return acc + 1;
//             } else if (grade === "B") {
//                 return acc + 2;
//             } else if (grade === "C") {
//                 return acc + 3;
//             } else if (grade === "D") {
//                 return acc + 4;
//             } else if (grade === "E") {
//                 return acc + 5;
//             } else if (grade === "F") {
//                 return acc + 6;
//             }
//             return acc;
//         }, 0)
//         return sum;
//     }
//
//
// }*/


function averageGrade(studentList: Student[]): number {
    let totalSum = 0;
    let totalValidGrades = 0;

    for (let student of studentList) {
        const validGrades = student.report.flatMap(report => report.grade).filter(grade => grade !== undefined);
        if (validGrades.length > 0) {
            const sum = validGrades.reduce((acc, grade) => {
                if (typeof grade === "number") {
                    return acc + grade;
                } else if (grade === "A") {
                    return acc + 1;
                } else if (grade === "B") {
                    return acc + 2;
                } else if (grade === "C") {
                    return acc + 3;
                } else if (grade === "D") {
                    return acc + 4;
                } else if (grade === "E") {
                    return acc + 5;
                } else if (grade === "F") {
                    return acc + 6;
                }
                return acc;
            }, 0);
            totalSum += sum;
            totalValidGrades += validGrades.length;
        }
    }

    if (totalValidGrades === 0) {
        return 0; // Falls keine gültigen Noten vorhanden sind, wird der Durchschnitt als 0 angenommen.
    }

    return totalSum / totalValidGrades;
}

const students: Student[] = [
    {
        firstName: 'Ming',
        lastName: 'Tay',
        age: 18,
        report: [{class: "Chemie", grade: ["B", 3, 2, undefined]}, {class: "Kunst", grade: ["A", 1]}]
    },
    {
        firstName: 'Helene',
        lastName: 'Pinsuwan',
        age: 17,
        report: [{class: "Chemie", grade: ["B", 2, 3]}, {class: "Kunst", grade: ["A", 1]}]
    },
    {

        firstName: 'Summi',
        lastName: 'Pinsuwan',
        age: 7,
        report: [{class: "Chemie", grade: ["B"]}, {class: "Biologie", grade: ["B", 3, 2, undefined]}]

    }]
printStudentList(students)
console.log("Gesamtdurchschnittsnote: " + averageGrade([{
    firstName: 'Ming',
    lastName: 'Tay',
    age: 18,
    report: [{class: "Chemie", grade: ["B", 3, 2, undefined]}, {class: "Kunst", grade: ["A", 1]}]
}]).toFixed(1))