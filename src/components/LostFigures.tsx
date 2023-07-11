import FigureModel from "../models/figures/figure-model";

interface LostFiguresProps {
    title: string;
    figures: FigureModel[]
}

export default function LostFigures({
    title,
    figures
}: LostFiguresProps) {
    return (
        <div className={[
            "lost",
            title.includes('white') ? 'lost-white' : 'lost-black'
            ].join(' ')}>
            <h3>{title}</h3>
            {
                figures.map(figure => (
                    <div 
                    key={figure.id}
                    className="lost-figure"
                    >
                        {
                            figure.logo && <img
                                className="lost-figure-logo"
                                src={figure.logo}
                                alt={figure.color + ' ' + figure.name}
                            />
                        }
                        <p>{figure.name}</p> 
                    </div>
                ))
            }
        </div>
    );
}