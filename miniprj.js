const students = [
    {
        id: "SV001",
        name: "Nguyễn Văn An",
        age: 20,
        gpa: 3.45,
        status: "active"
    },
    {
        id: "SV002",
        name: "Trần Thị Bình",
        age: 21,
        gpa: 3.80,
        status: "active"
    },
    {
        id: "SV003",
        name: "Lê Minh Cường",
        age: 22,
        gpa: 2.95,
        status: "inactive"
    },
    {
        id: "SV004",
        name: "Phạm Hoàng Dũng",
        age: 19,
        gpa: 3.10,
        status: "active"
    },
    {
        id: "SV005",
        name: "Đỗ Thị Lan",
        age: 23,
        gpa: 2.50,
        status: "inactive"
    }
];
let choice;
const displayMenu=()=>{
choice=+prompt(`
    =======menu quản lí sinh viên======
    1.Create Student
2.Read All Students
3.Filter Scholarship Candidates
4.Update Student Profile
5.Delete Record
6.Compliance Verification
7.Academic Statistics
8.Data Normalization
0.thoát chương trình
    `);
};
// case 1
const createStudent=(listStudent)=>{
    let newId=prompt("nhập id");
    let newName=prompt("Nhập tên ");
    let newAge=+prompt("nhập tuổi");
    let newGpa=+prompt("Nhập gpa");
    let newStatus=prompt("Nhập trạng thái(active/inactive)");
 let newStudent={
id:newId,
name:newName,
age:newAge,
gpa:newGpa,
status:newStatus,
};
listStudent.push(newStudent);
};

// case2
const readListStudents=(listStudent)=>{
listStudent.forEach(element=>
    console.log(element)
    
);
};

// case3
const filterStudent=(min,listStudent)=>{
    let newList=listStudent.filter((element)=>{
return element.gpa>=min;
    });
    console.log(newList);
    
};

// case4

const updateStudent=(listStudent)=>{
let id=prompt("Nhập id học sinh cần cập nhật ");
const findStudent=listStudent.find((student)=>{
    return id===student.id
    

});
if(findStudent){
    let newName=prompt("Nhập tên mới",findStudent.name);
    let newGpa=+prompt("Nhập gpa mới ",findStudent.gpa);
    
findStudent.name=newName;
findStudent.gpa=newGpa;
console.log("cập nhật thành công");

}else{
    console.log("không tìm thấy ");
    
};
}
// case 5
const deleteStudent=(listStudent)=>{
let id=prompt("nhập Id học sinh cần xóa");
const findStudent=listStudent.findIndex(student=>
     student.id===id
);
if(findStudent!==-1){
    listStudent.splice(findStudent,1);
    console.log("đã xóa học sinh ");
    
}
else{
    console.log("xóa không thành công ");
    
}
};

// case 6
const checkStudent=(listStudent)=>{
    let list=listStudent.filter(element=>
        element.age<18
    );
    if(list.length>0){
        console.log("true");
        
    }else{
        console.log("false");
        
    }
    if(listStudent.some(element=>element.status==="active"))
        {
        console.log("true");
        
    }else{
        console.log("false");
        
    }
};

// case 7
const averageGpa = (listStudent) => {

    let total = listStudent.reduce((acc, student) => {
        return acc + student.gpa;
    }, 0);

    let average = total / listStudent.length;

    console.log(`Giá trị trung bình: ${average}`);
};
// case 8
const upperList=(listStudent)=>{
    let names=listStudent.map((student)=>({
        ...student,
        name: student.name.toUpperCase()
    }));
console.log(names);  


   

};
do {
    displayMenu();
    switch (choice) {
        case 1:
            createStudent(students); 
                       break;
        case 2:
            readListStudents(students)
            break;
        case 3:
            filterStudent(3.2,students);
            break;
        case 4:
            updateStudent(students);
            break;
        case 5:
            deleteStudent(students);
            break;
        case 6:
            checkStudent(students)
            break;
        case 7:
            averageGpa(students);
                        break;
        case 8:
            upperList(students);
            break;
    case 0: 
    console.log("thoát chương trình");
    
        default:
            console.log("lỗi vui lòng nhập lại");
            
            break;
    } 
} while (choice!==0);
