export default class JobModel{
    constructor(id,jobCategory, designation, location, companyName, salary, positions, skills, date, applicants=[]){
        this.id = id;
        this.jobCategory = jobCategory;
        this.designation = designation;
        this.location = location;
        this.companyName = companyName;
        this.salary = salary;
        this.positions = positions;
        this.skills = skills;
        this.date = new Date(date);
        this.applicants = applicants;
        this.applicantsCount = applicants.length;
    }

    static getAll(){
        return Jobs;
    }

    static getJobID(id){
        //console.log('inside model id :', id);
        const job = Jobs.find( job => job.id == id);
        //console.log('inside model job : ', job);
        return job;
    }

    static delete(id){
        Jobs = Jobs.filter( job => job.id != id);
    }

    static update(jobObj){
        const ind = Jobs.findIndex( job => job.id == jobObj.id);
        Jobs[ind] = jobObj;
    }
}

var Jobs = [
    new JobModel(
        1,
        'Tech',
        'SDE',
        'Bangalore',
        'MicroSoft',
        '2000000',
        3,
        ['React', 'NodeJS', 'Mongo', 'JS'],
        '31-03-2024',
        [{'name':'John', 'email': 'john@gmail.com', 'contract': '9876543210'}, {'name': 'Alice', 'email': 'alice@gmail.com', 'contract': '1234567890'}, {'name': 'Bob', 'email': 'bob@gmail.com', 'contract': '2345678901'}]
    ),
    new JobModel(
        2,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Charlie', 'email': 'charlie@gmail.com', 'contract': '3456789012'}, {'name': 'David', 'email': 'david@gmail.com', 'contract': '4567890123'}]
    ),
    new JobModel(
        3,
        'Full-Stack Developer',
        'SDE 2',
        'Bangalore',
        'Apple',
        '2400000',
        6,
        ['React', 'NodeJS', 'Mongo', 'Express'],
        '12-03-2024',
        [{'name': 'Eve', 'email': 'eve@gmail.com', 'contract': '5678901234'}, {'name': 'Frank', 'email': 'frank@gmail.com', 'contract': '6789012345'}, {'name': 'Bob', 'email': 'bob@gmail.com', 'contract': '2345678901'}]
    ),
    new JobModel(
        4,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Grace', 'email': 'grace@gmail.com', 'contract': '7890123456'}, {'name': 'Kate', 'email': 'kate@gmail.com', 'contract': '0987654321'}, {'name': 'Liam', 'email': 'liam@gmail.com', 'contract': '9876543210'}]
    ),
    new JobModel(
        5,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Peter', 'email': 'peter@gmail.com', 'contract': '5432109876'}, {'name': 'Kate', 'email': 'kate@gmail.com', 'contract': '0987654321'}, {'name': 'Ivy', 'email': 'ivy@gmail.com', 'contract': '9012345678'}]
    ),
    new JobModel(
        6,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Quinn', 'email': 'quinn@gmail.com', 'contract': '4321098765'},
        {'name': 'Ryan', 'email': 'ryan@gmail.com', 'contract': '3210987654'},
        {'name': 'Sarah', 'email': 'sarah@gmail.com', 'contract': '2109876543'},
        {'name': 'Tom', 'email': 'tom@gmail.com', 'contract': '1098765432'}]
    ),
    new JobModel(
        7,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Frank', 'email': 'frank@gmail.com', 'contract': '6789012345'},
        {'name': 'Grace', 'email': 'grace@gmail.com', 'contract': '7890123456'},
        {'name': 'Harry', 'email': 'harry@gmail.com', 'contract': '8901234567'},
        {'name': 'Ivy', 'email': 'ivy@gmail.com', 'contract': '9012345678'},
        {'name': 'Jack', 'email': 'jack@gmail.com', 'contract': '0123456789'}]
    ),
    new JobModel(
        8,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Liam', 'email': 'liam@gmail.com', 'contract': '9876543210'},
        {'name': 'Mia', 'email': 'mia@gmail.com', 'contract': '8765432109'},
        {'name': 'Noah', 'email': 'noah@gmail.com', 'contract': '7654321098'},
        {'name': 'Olivia', 'email': 'olivia@gmail.com', 'contract': '6543210987'},
        {'name': 'Peter', 'email': 'peter@gmail.com', 'contract': '5432109876'},
        {'name': 'Quinn', 'email': 'quinn@gmail.com', 'contract': '4321098765'},
        {'name': 'Ryan', 'email': 'ryan@gmail.com', 'contract': '3210987654'},
        {'name': 'Sarah', 'email': 'sarah@gmail.com', 'contract': '2109876543'}]
    ),
    new JobModel(
        9,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Grace', 'email': 'grace@gmail.com', 'contract': '7890123456'},
        {'name': 'Harry', 'email': 'harry@gmail.com', 'contract': '8901234567'}]
    ),
    new JobModel(
        10,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Liam', 'email': 'liam@gmail.com', 'contract': '9876543210'},
        {'name': 'Mia', 'email': 'mia@gmail.com', 'contract': '8765432109'},
        {'name': 'Noah', 'email': 'noah@gmail.com', 'contract': '7654321098'},
        {'name': 'Olivia', 'email': 'olivia@gmail.com', 'contract': '6543210987'}]
    ),
    new JobModel(
        11,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'David', 'email': 'david@gmail.com', 'contract': '4567890123'},
        {'name': 'Eve', 'email': 'eve@gmail.com', 'contract': '5678901234'},
        {'name': 'Frank', 'email': 'frank@gmail.com', 'contract': '6789012345'},
        {'name': 'Grace', 'email': 'grace@gmail.com', 'contract': '7890123456'}]
    ),
    new JobModel(
        12,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024'
    ),
    new JobModel(
        13,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Kate', 'email': 'kate@gmail.com', 'contract': '0987654321'}]
    ),
    new JobModel(
        14,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Harry', 'email': 'harry@gmail.com', 'contract': '8901234567'},
        {'name': 'Ivy', 'email': 'ivy@gmail.com', 'contract': '9012345678'},
        {'name': 'Jack', 'email': 'jack@gmail.com', 'contract': '0123456789'}]
    ),
    new JobModel(
        15,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Mia', 'email': 'mia@gmail.com', 'contract': '8765432109'},
        {'name': 'Noah', 'email': 'noah@gmail.com', 'contract': '7654321098'},
        {'name': 'Olivia', 'email': 'olivia@gmail.com', 'contract': '6543210987'}]
    ),
    new JobModel(
        16,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Harry', 'email': 'harry@gmail.com', 'contract': '8901234567'},
        {'name': 'Ivy', 'email': 'ivy@gmail.com', 'contract': '9012345678'},
        {'name': 'Jack', 'email': 'jack@gmail.com', 'contract': '0123456789'}]
    ),
    new JobModel(
        17,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Olivia', 'email': 'olivia@gmail.com', 'contract': '6543210987'},
        {'name': 'Peter', 'email': 'peter@gmail.com', 'contract': '5432109876'},
        {'name': 'Quinn', 'email': 'quinn@gmail.com', 'contract': '4321098765'}]
    ),
    new JobModel(
        18,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Bob', 'email': 'bob@gmail.com', 'contract': '2345678901'},
        {'name': 'Charlie', 'email': 'charlie@gmail.com', 'contract': '3456789012'},
        {'name': 'David', 'email': 'david@gmail.com', 'contract': '4567890123'},
        {'name': 'Eve', 'email': 'eve@gmail.com', 'contract': '5678901234'},
        {'name': 'Frank', 'email': 'frank@gmail.com', 'contract': '6789012345'},
        {'name': 'Grace', 'email': 'grace@gmail.com', 'contract': '7890123456'},
        {'name': 'Harry', 'email': 'harry@gmail.com', 'contract': '8901234567'},
        {'name': 'Ivy', 'email': 'ivy@gmail.com', 'contract': '9012345678'}]
    ),
    new JobModel(
        19,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        []
    ),
    new JobModel(
        20,
        'Support',
        'Project Manager',
        'Hyderabad',
        'Amazon',
        1800000,
        1,
        ['Communication', 'Management', 'Finance'],
        '31-05-2024',
        [{'name': 'Harry', 'email': 'harry@gmail.com', 'contract': '8901234567'}]
    )
]