interface LOTTO {
    [index: string]: string | number | Date | Array<number>;
    IDX: number;
    PICK_DATE: Date;
    NUMBERS: Array<number>;
    BONUS: number;
}

interface ILottoDonghang {
    [index: string]: string | number;
    drwNo: number;
    drwNoDate: string;
    drwtNo1: number;
    drwtNo2: number;
    drwtNo3: number;
    drwtNo4: number;
    drwtNo5: number;
    drwtNo6: number;
    bnusNo: number;
    totSellanmnt: number;
    firstAccumamnt: number;
    firstPrzwnerCo: number;
    firstWinamnt: number;
    returnValue: string;
}