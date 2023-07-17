import FigureModel from "../models/figures/figure-model";

interface LostFiguresProps {
    title: string;
    figures: FigureModel[]
}


export default function LostFigures({
    title,
    figures
}: LostFiguresProps) {

    const getLostFigures = () => {
        const lostFigures:FigureModel[] = [];
        const namesArray: string[] = []

        for (const fig of figures) {
            if (!namesArray.includes(fig.name)) {
                lostFigures.push(fig);
            }
            namesArray.push(fig.name);
        }
        return lostFigures;
        
    }

    return (
        <div className={[
            "lost",
            title.includes('white') ? 'lost-white' : 'lost-black'
        ].join(' ')}>
            <h3>{title}</h3>
            {
                getLostFigures().map(figure => (
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
                        <p>{figure.name} X {figures.filter(fig => fig.name === figure.name).length}</p>
                    </div>
                ))
            }
        </div>
    );
}