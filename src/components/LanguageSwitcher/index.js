
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const router = useRouter();

    const { lang } = useTranslation();

    return (
        <div style={{boxShadow: '0px 4px 4px 0px #00000040'}} className={'cursor-pointer rounded-[16px] px-4 py-1 bg-white text-black'}>
            <select
                className={'border-transparent focus:ring-0'}
                value={lang}
                onChange={(e) => {
                    const locale = e.target.value;
                    router.push(router.pathname, router.asPath, { locale });
                }}
            >
                <option value="en">ENG</option>
                <option value="gr">GER</option>
            </select>
        </div>

    );
}