export default function CalculatorNumber({number, onClick}) {
    return (<>
        <button onClick={() => onClick(number)} className="bg-blue-700 text-3xl p-3 text-white border-2 border-blue-200">
            {number}
        </button>
    </>);
}