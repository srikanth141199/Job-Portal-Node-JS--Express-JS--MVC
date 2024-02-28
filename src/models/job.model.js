export default class JobModel{
    constructor(id,jobCategory, designation, location, companyName, salary, positions, skills, date){
        this.id = id;
        this.jobCategory = jobCategory;
        this.designation = designation;
        this.location = location;
        this.companyName = companyName;
        this.salary = salary;
        this.positions = positions;
        this.skills = skills;
        this.date = date;
    }

    static getAll(){
        return Jobs;
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
        '31-03-2024'
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
        '31-05-2024'
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
        '12-03-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
    )
]