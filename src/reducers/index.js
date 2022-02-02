import src1 from '../assets/rza.jpg';
import src2 from '../assets/methodman.jpg';
import src3 from '../assets/ghostfacekillah.jpg';
import src4 from '../assets/raekwon.jpg';
import src5 from '../assets/gza.jpg';
import src6 from '../assets/odb.jpg';
import src7 from '../assets/ugod.jpg';
import src8 from '../assets/inspectahdeck.jpg';
import src9 from '../assets/mastakilla.jpg';
import src10 from '../assets/hoodi.png'
import src11 from '../assets/panama.png'
import src12 from '../assets/tshirt.png'

const initialState = {
    cards: [
        {
            id:1,
            title: 'Robert Fitzgerald Diggs (Роберт Фицджеральд Диггз) он же RZA',
            desc: 'The RZA самый важный человек в Клане,' +
                ' также он один из самых уважаемых людей в хип-хопе в целом, ' +
                'не только потому что он рэпер, но ещё и потому что он один из ' +
                'самых удачливых продюсеров, он голова такой формации, как Wu-Tang, ' +
                'а также владелец лейбла Razor Sharp Records. RZA, Genius и Ol\' Dirty ' +
                'Bastard составляли ядро Клана с самого начала. После неудачных попыток' +
                ' сольной карьеры, RZA вместе с кузенами и лучшими друзьями, образовал Wu-Tang Clan.',
            img: src1
        },
        {
            id:2,
            title: 'Clifford Smith (Клиффорд Смит) он же Method Man',
            desc: 'Method Man всегда был звездой первого плана в составе группы. Он приобрел' +
                ' известность после трека M.E.T.H.O.D MAN с первого альбома группы. В 1994 году ' +
                'вышел его альбом Tical, продюсером которого был The RZA. The RZA продолжил традиции ' +
                'Wu-Tang Clan и сделал альбом довольно тяжелым по звучанию. Вообще, The RZA приложил руку' +
                ' ко всем сольным альбомам участников Клана 1994—1995 годов. Благодаря его неповторимому ' +
                'стилю, эти альбомы навсегда запомнились слушателям.',
            img: src2
        },
        {
            id:3,
            title: 'Dennis Coles (Деннис Коулз) он же Ghostface Killah',
            desc: 'Ghostface Killah впервые был услышан на дебютном альбоме Wu-Tang' +
                ' Enter the Wu-Tang: 36 Chambers, но он также признается как и самый удачный ' +
                'соло-исполнитель из всего Клана. Между 93 и 94-ми годами Ghostface носил маску на лице,' +
                ' во время снятия видеоклипов, и интервью, этим он хотел показать что он действительно безликий.' +
                ' Успех к Ghostface Killah пришёл после выхода альбома Raekwon Only Built 4 Cuban Linx,' +
                ' который считается одним из наиболее популярных и удачных альбомов всего Wu-Tang Clan.',
            img: src3
        },
        {
            id:4,
            title: 'Corey Quontrell (Кори Квонтрэлл Вудз) Woods он же Raekwon',
            desc: 'Кори Вудс, известный под сценическим псевдонимом Raekwon,' +
                ' это американский рэпер с Восточного побережья, один из участников группы' +
                ' Wu-Tang Clan. Его альбом «Only Built 4 Cuban Linx…» по праву считают одним' +
                ' из лучших сольных альбомов участников Wu-Tang Clan’а, и это один из самых лучших' +
                ' и влиятельных альбомов хип-хопа 1990-х. За эти годы Raekwon стал известен тем,' +
                ' что остался верным своим нью-йоркским уличным фанатам. Лидер Wu-Tang Clan’а, RZA, ' +
                'пояснил, что у Raekwon также есть прозвище «Chef» (повар) благодаря его опыту в сфере ' +
                'общественного питания/',
            img: src4
        },
        {
            id:5,
            title: 'Gary Earl Grice (Гэри Эрл Грайс) он же GZA',
            desc: 'The Genius/GZA — один из самых старших и опытных членов Wu-Tang Clan, он родился и' +
                ' вырос в Стэтен Айленд. GZA — единственный член Клана который быстро стал классикой группы. ' +
                'Он также двоюродный брат The RZA и ODB. GZA выпустил свой третий сольный альбом «Beneath the ' +
                'Surface» в 1999 году. GZA является режиссёром большинства клипов Клана. GZA является одним из' +
                ' лучших клипмейкеров в хип-хопе.',
            img: src5
        },
        {
            id:6,
            title: 'Russell Tyrone Jones (Рассел Тайрон Джонс) он же ODB',
            desc: 'Ol\' Dirty Bastard/ODB начал сольную карьеру в 1995 году, что делает его вторым' +
                ' (первым был Method Man, с его «Tical», выпущенным в 1994 году) участником Wu-Tang Clan, который ' +
                'выпустил сольный альбом. Альбом «Return to the 36 Chambers: The Dirty Version» был выпущен 28 марта ' +
                '1995 года. Синглы «Brooklyn Zoo» и «Shimmy Shimmy Ya» помогли альбому стать платиновым. 13 ноября ' +
                '2004 года Рассел Джонс был найден мёртвым на студии звукозаписи.',
            img: src6
        },
        {
            id:7,
            title: 'Lamont Hawkins (Лэмонт Хокинс) он же U-God',
            desc: 'U-God присутствовал только на двух треках в альбоме Enter the Wu-Tang: 36 Chambers,' +
                ' потому что он был в тюрьме. Его было мало слышно вплоть до революционного альбома Wu-Tang Forever,' +
                ' где он показал всё своё умение. В Golden Arms Redemption — своем первом альбоме, U-God показал, что ' +
                'он без сомнений может записать хороший альбом. Продюсерская команда U-God обеспечила ему хорошую ' +
                'поддержку.',
            img: src7
        },
        {
            id:8,
            title: 'Jason Hunter (Джейсон Хантер) он же Inspectah Deck',
            desc: 'Inspectah Deck родился и живёт в Нью-Йорке, на Стэтен Айленде. Он считается одним' +
                ' из самых талантливых МС Клана. Но не только его лирический талант составляет его личность, он ' +
                'также ещё и продюсер. Он продюсировал альбомы некоторых участников Wu — Fam, и некоторых других МС. ' +
                'Inspectah Deck стал фаворитом Wu-Tang с момента его появления на альбоме Enter the Wu-Tang: 36' +
                ' Chambers (это произошло в 1993 году).',
            img: src8
        },
        {
            id:9,
            title: 'Elgin Turner (Элджин Тёрнер) он же Masta Killa',
            desc: 'Masta Killa — самый таинственный участник Клана, он редко дает интервью и также' +
                ' редко выступает во время появлений Клана в свете. Masta Killa стал известен поклонникам, после того,' +
                ' как он стал 9-м официальным членом Клана в 1996 (до этого он просто присутствовал на релизах). Masta ' +
                'Killa появлялся на большинстве приближенных к Wu-Tang Clan альбомах, включая Killarmy и Sunz Of Man, ' +
                'а вне Wu-Tang он работал с Bounty Killer над «Eyes A Bleed» и с Public Enemy.',
            img: src9
        }
    ],
    clothes: [
        {
            id:1,
            title: 'ТОЛСТОВКА',
            price: 6500,
            desc: 'Тёплая желтая толстовка из флиса с логотипом WU',
            img: src10
        },
        {
            id:2,
            title: 'ПАНАМА',
            price: 3000,
            desc: 'Чёрно-жёлтая панамка с логотипами WU',
            img: src11
        },
        {
            id:3,
            title: 'ФУТБОЛКА',
            price: 2000,
            desc: 'Чёрно-жёлтая футболка с логотипом WU',
            img: src12
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}