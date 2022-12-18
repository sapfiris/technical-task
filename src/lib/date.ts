export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}
