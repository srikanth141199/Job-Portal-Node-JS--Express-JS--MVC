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

    static getJobID(id){
        const job = Jobs.find( job => job.id == id);
        return job;
    }

    static delete(id){
        Jobs = Jobs.filter( job => job.id != id);
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
        4,
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
        5,
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
        6,
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
        7,
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
        8,
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
        9,
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
        10,
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
        11,
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
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
        '31-05-2024'
    )
]