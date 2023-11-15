import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import info5 from "../../../../public/assets/info/info5.png";
import Footer from "@/components/Footer";
import AboutUsItem from "@/components/AboutUsItem";
import turkey from "../../../../public/assets/countries/turkey.png";
import kazak from "../../../../public/assets/countries/kazak.png";
import thai from "../../../../public/assets/countries/thai.png";
import china from "../../../../public/assets/countries/china.png";
import german from "../../../../public/assets/countries/german.png";
import belgium from "../../../../public/assets/countries/belgium.png";
import hungary from "../../../../public/assets/countries/hungary.png";
import cuba from "../../../../public/assets/countries/cuba.png";
import austria from "../../../../public/assets/countries/austria.png";
import laos from "../../../../public/assets/countries/laos.png";
import poland from "../../../../public/assets/countries/poland.png";
import usa from "../../../../public/assets/countries/usa.png";
import egypt from "../../../../public/assets/countries/egypt.png";
import australia from "../../../../public/assets/countries/australia.png";
import indo from "../../../../public/assets/countries/indonesia.png";
import uk from "../../../../public/assets/countries/uk.png";
import russia from "../../../../public/assets/countries/russia.png";
import india from "../../../../public/assets/countries/india.png";
import canada from "../../../../public/assets/countries/canada.png";
import france from "../../../../public/assets/countries/france.png";
import czech from "../../../../public/assets/countries/czech.png";
import korea2 from "../../../../public/assets/countries/dprKorea.png";
import italy from "../../../../public/assets/countries/italy.png";
import bulgaria from "../../../../public/assets/countries/bulgaria.png";
import vietnam from "../../../../public/assets/countries/vietnam.png";
import korea from "../../../../public/assets/countries/korea.png";
import singa from "../../../../public/assets/countries/singapore.png";
import sweden from "../../../../public/assets/countries/sweden.png";
import japan from "../../../../public/assets/countries/japan.png";
import kuwait from "../../../../public/assets/countries/kuwait.png";
import useTranslation from "next-translate/useTranslation";

export default function Info6() {
    const bgStyle = {
        background: `url(${bg.src}) no-repeat center fixed`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        position: 'relative',
        height: 400
    };
    const { t } = useTranslation('common');
    return (
        <div className={'w-full'}>
            <Navbar />
            <div className={`w-full overflow-y-hidden h-[400px] relative bg-black flex z-0 flex-col`}>
                <div className={'w-full h-[400px]'} style={bgStyle}></div>
            </div>

            <div className={`flex w-full max-w-[100vw] relative items-center z-0 flex-col`}>
                <h3 className={'text-xl lg:text-3xl mt-[70px] lg:mt-[100px] font-bold'}>
                    {t('info6.title')}
                </h3>
                <section className={'w-full max-w-[1200px] py-[100px] gap-6 flex flex-row flex-wrap items-center text-black justify-around relative z-1'}>
                    <AboutUsItem src={turkey} title={'Ankara, Turkey'} desc={'Mogolistan Buyukelciligi (Embassy of Mongolia), A.Fethi Okyar Sokak No.4, Oran Diplomatik Sitesi, Cankaya, 06450 Ankara, Turkey'} mail={'Mail: ankara@mfa.gov.mn'} phone={'Phone: 90-312-4921027,  90-312-4921064'} />
                    <AboutUsItem src={kazak} title={'Astana, Kazakhstan'} desc={'Посольства Монголии в Республике Казахстан 010010, г.Астана, ул.Дарабоз 35'} mail={'Mail: astana@mfa.gov.mn'} phone={'Phone: +7/727/269-35-70,  +7/727/-229-37-90'} />
                    <AboutUsItem src={thai} title={'Bangkok, Thailand'} desc={'100/3 Soi Ekkamai 22, Sukhumvit 63,Klongton Nua, Wattana, Bangkok 10110 Thailand'} mail={'Mail: bangkok@mfa.gov.mn'} phone={'Phone: 66 2-381-1400,  66 2-392-4199'} />
                    <AboutUsItem src={china} title={'Beijing, China'} desc={''} mail={'Mail: mailto:beijing@mfa.gov.mn'} phone={'Phone: 86-10-6532-6512' +  '86-10-6532-6216'} />
                    <AboutUsItem src={german} title={'Berlin,German'} desc={'Botschaft der Mongolei Dietzgen-Str.31, 13156 Berlin BR Deutschland'} mail={'Mail: berlin@mfa.gov.mn'} phone={'Phone: 49-30-474806-0, 49-30-474806-16'} />
                    <AboutUsItem src={belgium} title={'Brussels, Belgium'} desc={'Ambassade de Mongolie Avenue Besme 18, 1190, Forest Bruxelles Belgique'} mail={'Mail: brussels@mfa.gov.mn'} phone={'Phone: 32-2-344-6974, 32-2-344-3215'} />
                    <AboutUsItem src={hungary} title={'Budapest, Hungary'} desc={'Mongуlia Nagykцvetsйge. 1022 Budapest, Bogбr u.14/C, Hungary.'} mail={'Mail: budapest@mfa.gov.mn'} phone={'Phone: 36-1-2124579, 36-1-2125731'} />
                    <AboutUsItem src={cuba} title={'Havana, Cuba'} desc={'Embajada de Mongolia Calle 66 No.505, esquina a 5ta. A, Miramar, La Habana. Cuba'} mail={'Mail: havana@mfa.gov.mn'} phone={'Phone: 53-7-2042763, 53-7-2040639'} />
                    <AboutUsItem src={austria} title={'Vienna, Austria'} desc={'Embassy/Permanent Mission of Mongolia, Fasangartengasse 45, 1130 Vienna, Austria'} mail={'Mail: vienna@mfa.gov.mn'} phone={'Phone: 43-1-5352807-0, 43-1-5352807-20'} />
                    <AboutUsItem src={laos} title={'Vientiane, Laos'} desc={'Embassy of Mongolia Ban Watnak, Thadeua Rd. Km 3, Vientiane, Laos PDR'} mail={'Mail: vientiane@mfa.gov.mn'} phone={'Phone: 856-21-315220, 856-21-315221'} />
                    <AboutUsItem src={poland} title={'Warsaw,Poland'} desc={'AMBASADA MONGOLII W POLSCE ul. Rejtana 15/16 02-516 Warszawa'} mail={'Mail: warsaw@mfa.gov.mn'} phone={'Phone: 48-22-849-9391, 48-22-848 2063'} />
                    <AboutUsItem src={usa} title={'Washington DC, USA'} desc={'Embassy of Mongolia 2833 M Street, NW Washington DC 20007 USA'} mail={'Mail: washington@mfa.gov.mn'} phone={'Phone: 1-202-333-7117, 1-202-298-9227'} />
                    <AboutUsItem src={egypt} title={'Cairo, Egypt'} desc={'Embassy of Mongolia No.14, str 152 , MAADI, Cairo Egypt'} mail={'Mail: mailto:cairo@mfa.gov.mn'} phone={'Phone: 202-23586012, 202-23591670'} />
                    <AboutUsItem src={australia} title={'Canberra, Australia'} desc={'Embassy of Mongolia, 23 Culgoa Circuit, O’Malley, ACT 2606, Canberra, Australia'} mail={'Mail: canberra@mfa.gov.mn'} phone={'Phone: 61-2-628 629 47, 61-2-628 663 81'} />
                    <AboutUsItem src={indo} title={'Jakarta, Indonesia'} desc={'Embassy of Mongolia The East Tower, 38th Floor, Unit 3, Jl. Dr. Ide Anak Agung Gde Agung Kav E 3.2 No.1 Mega Kuningan, Jakarta 12950, Indonesia'} mail={'Mail: jakarta@mfa.gov.mn'} phone={'Phone: 62-21-5795 8140, 62-21-5795 8141'} />
                    <AboutUsItem src={uk} title={'London,UK'} desc={'7-8 Kensington Court, London, W8 5DL United Kingdom'} mail={'Mail: london@mfa.gov.mn'} phone={'Phone: (44) 207-937-0150, (44) 207-937-1117'} />
                    <AboutUsItem src={russia} title={'Moscow,Russia'} desc={'Россия, г.Москва 115127, Борисоглебский пер.,11.'} mail={'Mail: moscow@mfa.gov.mn'} phone={'Phone: 7-495-690-67-92, 7-495-691-46-36'} />
                    <AboutUsItem src={india} title={'New Delhi,India'} desc={'Embassy of Mongolia 34, Archbishop Makarios Marg, New Delhi -110003,India'} mail={'Mail: delhi@mfa.gov.mn'} phone={'Phone: 91-11-2461-7989, 91-11-2463-3240'} />
                    <AboutUsItem src={canada} title={'Ottawa, Canada'} desc={'151, Slater street, suite 503 ottawa on Canada'} mail={'Mail: mailto:ottawa@mfa.gov.mn'} phone={'Phone: 1-613-569-3830, 1-613-569-3916'} />
                    <AboutUsItem src={france} title={'Paris, FRANCE'} desc={'Ambassade de Mongolie 5, Avenue Robert Schuman 92100 Boulogne-Billancourt FRANCE'} mail={'Mail: paris@mfa.gov.mn'} phone={'Phone: 33-1-46 05 28 12, 33-1-46 05 30 16'} />
                    <AboutUsItem src={czech} title={'Prague,Czech Republic'} desc={'Embassy of Mongolia 160 00 Praha 6, Na Marně 5'} mail={'Mail: prague@mfa.gov.mn'} phone={'Phone: 420 224311198, 420 224314827'} />
                    <AboutUsItem src={korea2} title={'Pyongyang ,DPR Korea'} desc={'Tehag gori-19,Munsu-dong,Teadonggang District, Pyongyang,DPR Korea'} mail={'Mail: pyonyang@mfa.gov.mn'} phone={'Phone: 850-2-381-7321, 850-2-381-7616'} />
                    <AboutUsItem src={italy} title={'Rome, Italy'} desc={'Via Francesco Denza 27, 00197 Rome, Italy'} mail={'Mail: italy@mfa.gov.mn'} phone={'Phone: +39-06-8540536, +39-06-8540536'} />
                    <AboutUsItem src={bulgaria} title={'Sofia, Bulgaria'} desc={'52 Frederic Joliot Curie, Sofia -1113, Bulgaria'} mail={'Mail: sofia@mfa.gov.mn'} phone={'Phone: 359-2-8659012, 359-2-9630745'} />
                    <AboutUsItem src={vietnam} title={'Hanoi, Vietnam'} desc={'Embassy of Mongolia Villa No 6, Van Phuc Diplomatic Quarter, Hanoi, Vietnam'} mail={'Mail: hanoi@mfa.gov.mn'} phone={'Phone: 84-4-384 53009, 84-4-384 54954'} />
                    <AboutUsItem src={korea} title={'Seoul,Republic of Korea'} desc={'Embassy of Mongolia, 95 Dokseodang-ro,Yongsan-gu,Seoul, 140-885, Republic of Korea'} mail={'Mail: seoul@mfa.gov.mn'} phone={'Phone: 82-2-798-3464, 82-2-794-7605'} />
                    <AboutUsItem src={singa} title={'Singapore'} desc={'Embassy of Mongolia 600 North Bridge Road. #24-08 Parkview Square Singapore 188778.'} mail={'Mail: singapore@mfa.gov.mn'} phone={'Phone: 65-63480745, 65-63481753'} />
                    <AboutUsItem src={sweden} title={'Stockholm,Sweden'} desc={'Embassy of Mongolia Svдrdvдgen 25B 182 33 Danderyd Stockholm, Sweden'} mail={'Mail: stockholm@mfa.gov.mn'} phone={'Phone: 46-08-7531135, 46-08-7531138'} />
                    <AboutUsItem src={japan} title={'Tokyo, Japan'} desc={'21-4, Kamiyama-cho, Shibuya-ku, Tokyo, Japan, Post Code: 150-0047'} mail={'Mail: tokyo@mfa.gov.mn'} phone={'Phone: 81-3-3469-2195, 81-3-3469-2216'} />
                    <AboutUsItem src={kuwait} title={'in Kuwait'} desc={'South Surra, Al Zahra, Block 8, Street 806, Villa 161, Kuwait'} mail={'Mail: kuwait@mfa.gov.mn'} phone={'Phone: (+965) 25216551, (+965) 25216557'} />
                </section>
            </div>

            {/*<div className={'mt-[200px] max-w-[1200px] mx-auto flex flex-col gap-10 my-[150px] justify-between'}>*/}
            {/*    <h3  className={'font-bold text-5xl text-[#FF9F47]'}>*/}
            {/*        Info*/}
            {/*    </h3>*/}
            {/*    <div className={'w-full flex flex-row gap-6 flex-wrap '}>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <Footer />
        </div>
    );
}
