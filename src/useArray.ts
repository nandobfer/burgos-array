export const useArray = () => {
    const newArray = (lenght: number) => {
        return Array.from({ length: lenght }, (_, i) => i + 1)
    }

    function chunkArray<T>(array: T[], chunkSize: number): T[][] {
        const result: T[][] = []
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk: T[] = array.slice(i, i + chunkSize)
            result.push(chunk)
        }
        return result
    }

    return { newArray, chunkArray }
}
