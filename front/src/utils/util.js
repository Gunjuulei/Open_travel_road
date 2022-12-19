export const START_TIME = 31500000;
export const END_TIME = 63900000;
export const LESSON_DURATION = 2700000;
export const BREAK_DURATION = 600000;

const format = string => {
    if (string?.length === 2) {
        return string;
    } else if (string?.length === 1) {
        return '0' + string;
    }
    return string.substr(0, 2);
};

export const compareIds = (a, b) => (a || "a").toString() === (b || "b").toString();

export const getTimeTable = () => {
    const times = [];
    for (
        let i = START_TIME;
        i <= END_TIME;
        i += LESSON_DURATION + BREAK_DURATION
    ) {
        const startHours = Math.floor(i / 60000 / 60);
        const startMinutes = i / 60000 - startHours * 60;
        // const endHours = Math.floor((i + LESSON_DURATION) / 60000 / 60);
        // const endMinutes = (i + LESSON_DURATION) / 60000 - endHours * 60;
        times.push(
            `${format(startHours.toString())}:${format(
                startMinutes.toString()
            )}`
        );
    }
    return times;
};

export const getNthStartingTime = n => {
    const milliSeconds =
        START_TIME + (LESSON_DURATION + BREAK_DURATION) * (n || 0);
    const startHours = Math.floor(milliSeconds / 60000 / 60);
    const startMinutes = milliSeconds / 60000 - startHours * 60;
    return `${format(startHours.toString())}:${format(
        startMinutes.toString()
    )}`;
};

const uselessData = {
    groups: ['a', 'б', 'в', 'г'],
    level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    lessons: [
        'Mathematics',
        'Algebra',
        'Geometry',
        'Science',
        'Biology',
        'Physics',
        'Chemistry',
        'Geography',
        'Physical Education',
        'Business Studies',
    ],
};

export function __TEST_SCHEDULE_DATA_CREATION__() {
    const { groups, level, lessons } = uselessData;
    const getIdx = num => Math.floor(Math.random() * num);

    const temp = [];
    for (let i = 0; i < 50; i++) {
        temp.push({
            _id: String(i + 1),
            day: parseInt(i / 10),
            time: i % 10,
            complex: `${level[getIdx(level.length)]}${
                groups[getIdx(groups.length)]
            } анги`,
            lesson: {
                _id: String(i + 1),
                title: lessons[getIdx(lessons.length)],
            },
        });
    }
    return temp;
}

export function initScheduleData(datas) {
    const array = [];
    for (let i = 0; i < 5; i++) {
        const temp = [];
        for (let j = 0; j < 10; j++) temp.push(null);
        array.push(temp);
    }
    (datas || []).map(data => {
        array[parseInt(data.day - 1)][data.time - 1] = data;
    });
    return array;
}

export const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];