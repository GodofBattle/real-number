interface LOTTO {
    [index: string]: string | number | Date | Array<number>;
    IDX: number;
    PICK_DATE: Date;
    NUMBERS: Array<number>;
    BONUS: number;
}