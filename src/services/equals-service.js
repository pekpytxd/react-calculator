import {evaluate} from "mathjs";

export default function equals(mathOperation) {
    try {
        const result = evaluate(mathOperation);
        return result.toString();
    } catch (error) {
        return 'Error';
    }
}