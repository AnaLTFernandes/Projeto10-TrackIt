export default function UpdateProgress (habits, progress) {
    const habitsConcluded = habits.filter(habit => habit.done);

    progress.habitsUnchecked = habits.length;
    progress.habitsChecked = habitsConcluded.length;
    const percentage = Math.round((progress.habitsChecked / progress.habitsUnchecked) * 100);

    return percentage;
}