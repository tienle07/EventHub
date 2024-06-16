import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ButtonComponent, TagComponent } from '.';
import eventAPI from '../apis/eventApi';
import { KnifeFork, KnifeFork_Color } from '../assets/svgs';
import { appColors } from '../constants/appColors';
import { Category } from '../models/Category';

interface Props {
    isFill?: boolean;
}

const CategoriesList = (props: Props) => {
    const { isFill } = props;

    const [categories, setCategories] = useState<Category[]>([]);
    const navigation: any = useNavigation();

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const api = `/get-categories`;

        try {
            const res = await eventAPI.HandleEvent(api);
            setCategories(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const data = [
        {
            iconColor: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASoSURBVHgB1ZtdbttGEIBn17FJoy++QYkCRSS3QJUTVDlB3RNUBorC/QHinCDuCewAbRzkJc4J4htYOYEVIJEc5CHKCaI3yw6szQyplUmKPztLStp8LxJl7mo/ze5yuUMLSNE6P9y68vxP4YESvcvry/vDew9H4BABttHzvOcSJvuD7X8+mpaT6Q/GvvfL7ECo1ubG5hlVDo4QimKbJIgdBWvdZv+/b03LzskKJTqpD5wRnolim+hY4EcofGJaPiHbioTac2c5IJwWnTIU/nrHtI6E7Nj/5qfcM1conCcK/np78N3vtmP2pl149gqETUUb54dBo398VjSG02M2gDKWKMwRBc8/wzHcLpq0ErI4OZkJLEHYQjQIm4avE5BHWXWmIqvMG79AYVvREFwbXF1t7mbVm5BVAivksADhqqKX1x4ugnZH8fr0+3Q35q+UahSuW7Tx5slvvuef6zGcjOzk5jXYUINwpqhSoyqiQoqT6cIjnLSSY3ZNdsGWisIZEcU6xZa6/NzRh1zRWTXhpCV2RPpLm3itgqxVlCkWNw/N/tNDLLifW6WCA7gev7ARjU6Dg4vmn//OyTYGz34W6qYLVWAIU7SE53+AUrBLQ+zSyBSl93M3AhfNP17hSxeqwOnSG/4jMKKaKCGzqsWT6Do1hCqYCgvmkMFJy0aUyJTFk4Z48n1YgrAwWaImCogtf2P8QB+aik6/K5/G4DgQCmjCCqAKOWP4+zf/t+5IeQ4WhJOWUkNTUUIW1LfUCLOrRCmOKFEoSyxS+P2Pf/eUUB2ogTLRsAlgyCK7dGOA404lo8SrslyUMJaNGuWesKkowZKNGuWOMEeUYMtGjVq9MFeUKJ2gsljkpHXR/OtF0aQlcNk4wc1xrmhUtgLLijAJKiF6Cpex47H/OL564lBJNmrUIoWPA5Qb2cqlqSxLLHqlVRe1yBJfg3BtsoTrwrXKEi4L1y5LuCpsdZ1NQ1sr8ZSDq3dL1S890x2/qLKbdjwT7lqEK0U2vrUZ35/Vfy+KsADRA1NqirC1bNYerqkwHp/0t/fu4W7DCZhSg7DdjUDWZnUMRRnxnC6Nol38AXb15+x96gpdmh3ZMlGiKMJxUcK7Gv8KS+rSvJt3A9E4WRHOrNdmIrOIsHFkuaKEjnBZFKwuVRYRNpK1Eb1tFHRNfn0SlmtiJ0pzmNbNEy6VrSJKs256jBbx9u7eayyzDxwYwoWyyxTV0E4FphcXIpwruwpRzbvtvce0x8QpY5hqmWeVonHK8rY5Dcidpefzs46Iztrz9vg5pjo6nDJ5wolu7Joo4V+PH7IWHUROl55F1kVRzfQZaMr2BZxy6QiHsi6LaqxvF2PCUTd2XJS4XWUxFh0Edmnf81+Gb+/2nz6QoI6AyTJF49g+4EJZBomh7QCTVYkS9ICLVU5XiQ66ph60Ki2zOlFNlA/iLTpomErOGHBBVEOJLZ6wGklMGJ0aneqQqCYUNtzaocSYXJPiqPxE90Q1Fz+E7eqWnSe89QMZ3VblD3iXRTVFWztRulN16MnW2xUUXrTx5RH26xb+cQuU6qHoKU0G8JUQ5nQh/L+kgI4nSpxK/86RfoT3C9f1zJfUeBasAAAAAElFTkSuQmCC',
            iconWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG8SURBVHgB7diNbYMwEAVgRmCDdoN0A0boCBkhIzACIzBCRmAERvAIjPBqGpe4YOw7/5wVKSchkWDufSAgOE1jFYAOj1J6+WgES+e1ermzc/UOI54lBjfgOSrX7ABJ+A7My9QDv+CuYvAQeN0eavCN88oOJ4D7YK4ZBAk4EbxtaxLQWeBM8FpXX7MbaKVi4Slgvf55yIX/mk6GZwCrQ65pyilFhTvAMJ9bBviv7vvmEwrA9ZjhZP/Zsc0H3g7Ubt6BX8oHN8HU4oGtwT34pc7goN/gtyhwCTj+v8/46hcWBc4NB+8+mRELzgnX6xe9LOAXH1wZHg+uBE8HC8PzgYXgQ3ZwAfg6HxzxeI6XweaGV6k3/A0/h7YvBcfzhWZ8CTiOb2A++DpuqAp3gH3wDQKhWT4HfAbfX/OyZ5wAdsIdfUZCD5UMZ4CDgXDPyNl9xMA7OKUnqV9xcERvet+S4F0GZUIQ7i8BtrK65BxJsJV5jc6rAbaye3ZuTXA0HPR/gBRQ7uWG4ZjWwXnu4jzwiWBZKGglATZoyo/PEjo6JQW24KF7bPI96JU0mABfsHuCjObLxZz9qpPPE9Nl3fYDRq/M2qgWX0UAAAAASUVORK5CYII=',
            color: '#29D697',
            key: 'food',
        },
        {
            iconColor: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdCSURBVHgBzVvRctNGFL137YSEYWiUh742fEHcL4h5ggRmGtoE+pbwBaRfgPkC4Aswb2XitM4MGHhCfEHMF8Q8daYzxHlgoDPYur13ZcmyLMm7kpz2zECstXb3Hu3u3bvnyghzQv/ejXUgrHke1hR4rtN6exx8d7Zz6wSAavzxnP/25C8BdBVRF6rUdV68/QBzQBVKRH93c8Mj2EbAfRrCipQh/yNQdf4TkkWgNpMTsnwP1kb31Qn5/yE/jF82ewToKkVN5/D1eygJCAVxul1fuVpdeoCgDgB8gokdIdUDw/u/3lyjgToFExD1+OE0nKM3z6EgcpM1JTnuiJ44rde/BddnO1s8lfXomqEE0gpyQKbrdwvLJ0y0AQZEBUS4Hb3mqe6CDRDXCFWTp/ip9A85YEVWRvPTzuZjNtxl57NmU5fZrX39eeuHcQG5kAdCmvsXO8ASxmT/4nXmjyYeQE78g1gPL6peIY8rduhRnniA2TAme2mg/rQezTjQC9eo8/ubHhecQxHIKLPHNr3dmCxWvTv8OHtQBDyVJ6+pGFmC3rKH+6a3G5OVkcCKd70IYYrPDNIBRc7GmChBffmPzkfTKqlkZY2e7Wy+i66JwoRp0nMjYg/yIIFo/97tdbb3JGsNJ5IVr3tpiO/YHI5qyC2VcFGkEKWh50o0xmu4nVY1kezVhcuPQ2ek97f5ECbDPTpSIYNo0BbW0ralKbL9uzf3kGB/orAkwlPTlsicrBHRUT+8LSUFHlNk2Yk0INnS4oTRi3lfNCNrQTSs4kEzXjZB9tPOzYeZe2lRwoTdWMns2DgH0cDW/u6NB9GikKx4X55m+zALhQir8Lj29+7W/IgG1anS6LOzDXsPPix5sGEcIeUhzIY7rZducLkAKjuYL0h0hBVYuLwXXIRkU9dqGiwJ81nSjV4TDbdT2y6H6KgfCvvRZLXnyhP3WhBeImgEn2XJyB6e2GaJREdG1gPPrMl6YB5fTrc1m7Ac3KPGLw7Vw8S2SicatOs/WDUypg5FkEFYH9IHXx8F5doRJvU3L6LS9ChuQPGKVYITKAMinfBTdDKC80+7W8+mgpY5Eg2Agy+OWkBvHcpCwghHIWvnvyCqUb28wZJuxVz0MkHGgZoiTsovuCCiPli/Fi2oxBOMOCMcfL2T+F2V7od9XSxR6W8tlFL7O7frHLvu8UmkLl+AFfBcSHJg0px1mBbNGAaVZ0se7V8YUR9dTDXoW7UGONyQacmue4UllLXwBmLtiKALimNdgg/RyGiiHV6jMnWRpZMsp2VKFGVWEJ+cKGEmiuTDNlLaQHGdwhmBJPgC+vLDUInM8NLZRHnGEPBhHI9h+Nl12u5MzUrHwtUr7Ie8DS0+BNuckBU5EhU+4RxL27HQc9JJpmUJyF1tvb4er5OYGRDDlHoC3z4/NyGYBT1LvQpHiLSN3BlFeunyhStZN6hw4G6QTdPZOq9S92NQ8xAwagwN1TvfT/hr32l1HsEcwGRv9dmatLUSphR5TZyT5+u8KOtX1ohJPG2gAqY5rQAyY1YWl36S9Kdk+7jvlYm+kfx1zDbqiE0N3aSBwrPdrVN772uI1O1l2GSntT1r2QQOLnXGZPZNU2lPIctKP2xD2Zi1j2Y4LYmfLw3wWS6SibZwX+gdKKSc2m1m4wYBQ0akpVMtZREd9QVQqakhUrkpfYvIKC11UUqqZRpdValoI8qBldwJjTSnNRchfvDlvQ4qZnhkM9jEunzv6lHnWnAZrNF4pDW5LRVCd7XV+XF0eJ/WWK1gGdTz9tCIXvvKxfxSLThKfPuCG3ptyAv708u5c/TqeXhv9Iw7p1TLkscRIozI+vvQlIA9GzmOaX6sO8aU/lUyYQkyAvvUuJDsRje3Uj8mq/WouHKh7ymRMI2X6Dj9MVh8apz2L3Dw5jNvOIOWBipdEiqDsAjzkSUTknXabR2EmzRQQGE4n9xuZgQOBQnHHeFEYkufNrIaKSilYMwvEHiz9a+8hGOjKlDTBtF+WuXCmlE8ZanDOJN69oTF1njZFFnxzDwCk9O5LHHMi/kEm2DBgnBadJb8AslgQQ7P3ZFBF6sCZsEo1YJu2uE/kax2VhyM6z1qrkRzvPQ1I9UiAkBqVbBAUaK8pzado8794LqQcGCQaonD+KWvUkY07pAI8otpCSM8C8ZkmWgTCmfTItozaB3YPkSdbOD//e5i9B0H7r4QWVmjaamWJFi9u7h62Lkmbh2KYGE5DBG/gfcecoJnxYHTenXdRle2fpNc3DqP8rX87y+OQ8TvDztdW48so7lYUTXnsPMULJHrtflwlBUfzyxJUyzrbiwcSJaAWMng0bzy4mUu3cxq60lD/+6tPT6YHpD/W53ZnXIWPJh+vjac/nsBGckKH1CutjrHUBClkA3Qlxe5iPZ4wtSziOv1FpmGcQ3M/7GEzhsfO3qql4NSf8Q0MkwbN057eutsdG0i7elNJrJQwQGQWuHyj6bZujz4FxgzUF02n3pwAAAAAElFTkSuQmCC',
            iconWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgBvVmNleIgECZXQTowV8FmKzBXwW4H3lVgCbED31aQ68DtQK8CvQpwK9AO5mYEbgkSwgDu9948FefnY4BkgEpkAgCe8KNDaVFOVVW96fa9br+inLUcSFDnr/hqIKEGpUe5wBgXS2cJ05AoA8pCPBqa7B7CWGrd2tMpH4aHkNcEeojD1rLbQzx6UQqgsisZwY+W7RZ4kJCbdU04ZohHsOxfgA+K9xTi9S30J67yM368C35nTbY+BB/vSU8Xt6egFgsHnbZreGYwhHiECJspMWQQ77RNzbDxxSMe83McxosulXhnJSCVsIFEqUOEe6bDEqRj/PdThJtMxzZqrbeEfMIGCx/poVAA+zm9LuDPYM/JMjeQ/UbcZfjxYZFiFBNwodvrRPsQettQAg9TgQerbcWwi8XFGLaQBpdAD9bwwX0icgkbtHOLZQ4jIk4HJvUgnTBhHVossdg6hNxFXZKw8geqEpOQBio9a0+mh/8ByhImHG2HnSaxnzGS4Mxfbe8WWasHEL7Fr8QEgCa8EHYWbxtULBuvjh7prFE2KL/x/18eX5Txn04z+TkJVfp+6O9X8o/6jY5Nn2bj3NkOaU6/QKgo8XfKbMGkkwk3wys3U6AWPyue9vVKCajIi9V+0EK9PguVDRuU/QblVX93A89leoPyNjFaC8ffdXIzAOmL0IW76NyMt87vZmKkXBxBrbWlbXyE8oQHX7vJKqQvSonyUua56Sds4D5luDt0F7uib0S4J+wt3qHAG7FU7TE4/0t3/hYi3hoH3LONmDfdam6OA5+4tI17hmFs4NrKcop9ODbEb/VjA+4snW2GHxfjfSLM1xycQGtL71jA352+mBjGnABd5Ajm7ca1UZ/peBQA5o8QYv1PHwODyoxkOvQh9twjJo4Uc4AyZ3lc0lPE487yDPEMwgC86REiHndq6unAAHy0pvPAxyByQD2FhJsAoErs0wcXs1Ni7iaAivBnoTYEHHTW95OIxxmlxbjBG4QgaQJdYaB8F2rXEQu74D+IOGxQnucIswFqjg6RQxx93AtfeAlKwWSAzNLSv7vZBfUiY29uCZXIBKgnBRHsxOe2n4TuwH9oHapFbnfnKH+wnTPP7/APEClVMih0FakAAAAASUVORK5CYII=',
            color: '#EE544A',
            key: 'sports',
        },
        {
            iconColor: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPoSURBVHgB7ZpNchJBFIDf6yGkSFkp0HLhSjxBkhOEnEBuIK40iQtc5aesCimloruxSirJLjmB5ASSExhOEFy5SQqs0kQDdPt6+An/NkwP9GC+FQwzwEe/fv3mNQhTSDJ5Hr6Zm3+GQsQBMJzZe7AkjwdgSljdKi6j4DFEESsjxlAeRAQBUGic41tZOXp/QuEFBpU4IEsA8DDUDPte4yvZ1vCk0VtkUhCY8vXGy/YLz1EwTnaU8FTFCFm34anKxGR1hqcqY5P1MjxV8VR2XOGpinbZSYSnKlplpShDnht3eKoyuZiaAHey08qd7LRyJ+tbEHOCsaQAzPZ62d+dCoQSdSKyIMRp8MrK2nakJA+vb18u9jrdh7JYILksWvzk07uHuWGu9IesDE/ELA/8PjlIPSrAiJgp2yc83WKQ7OjhqcpkZTWFpyrjlfUoPFUZg6z34amKp7LI+MqkBVvxtIISInAOBvFf1ca+q6BebBQXAgyccpDTphXnUDr8EMmrXOsLWaeJh9UEAsadFmwdGZbMAljbuiyQuY0Bls2kI9/6vY/RsrIVWw7N7wDy5KAGHjUvo2CBLThPrm5dpPqdZ6zsy83v0TIGP5Pjouo1UppG/4ge9ly/jU1Q1pCiHYR7HTRSdm3zcseFaF+Mk5XhiwxS4AHKc1Ymi+vZ8GPGaiEye13K2/YT7bWtxWZ2wCMGynZsTMUCcmWrU56br6V8FDlEKzUo5Q+FwJhXOyd9w3h94+Ippf2v9Lk2pblYr3Pq2S8BgheceeaSZKootzGj4BE9R9b54kPOGznPaPfuDFxwc1OmH88Cr+gaWSk6coLwIIPqpE3Wy0yoAucz2hMeIt1P12mTpYX8C0yQg/eRguxmgEaEEIXG46asLLa9TA6q0JfLgUYQWXN3oCnLGI+DAQhh2aAJ+b9FWhJPGs9vw5gLI5LL/l7kFDSNrkCWan1+K4sYBUOoCuu567lLbdr9dOS49ZCRNwIyUVUYi40qXPvbbSjRedxT2Zlf8ANG5PBtJO8It/xfWAka0eAVW8qkQ13la1NWgHBV/XQif123TXApXOVshUbY/tcoy8/jyBKZ9P2Vfp97Wy4yzFGdrzMj50ADztoL8DqZLO5W7lVjoorLtGUSpbo8TANE6zI7Y1DJZxT60837C1mEl8v8nH6iMGjAtAa5pBnGdipSEgL0rHE0b0wTlbQlqGCQfYRhE0InztzqzoQm0CYrR9dJCK6EZZII6bmR10zX0iMTwkjCNKJynraWZ6YxsAGytk33tgAJehgd8A4lyuJHM9dsd9z7rcOi1O159eYiLlM+LU/N+rmR9oM/4dh0yQZ/AdDrmAIlY66LAAAAAElFTkSuQmCC',
            iconWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgB7ZntVcIwFIZfPP4XJxAn0A0oE+gG1gnUCcoG4gTABjCB3UCcoHUC2CDekFtooR9pE9JyDs85lxb69fQmadIAdBwhxJAioPimeEEXIbE+i35SrEWWrfQ1OoAUpYUUeqZ4pOiX7d+atMwmLbxUaONMmrP5AJVNHxXZLOOk0nWLXRfr0ibFrouxtM1i18VIWj47YbHYdTHNtIcWuMIZcpF2xVlKd2LskUNMsaBYUtzw+o4uSYccy16vt0p+5M4qQ5vSG7AkxYJEN7oHupaOsS/2VR3RNC6kQ+QUuwmnkG5c7LrYkpZiMxgWuy62pGVGP+CIS+fSBB6PP2E/xI2hqtiy6Jg2X2ylYEDxXrA9hmon4eG2VqRJaEAL+QIxKNlNbhtDZT6D8zqtKZzmaL82GmIAfeFcKqsHZeYuWafG8QcDOMs+DLkqOHmfJ/3WUHVqGzy3Nk3fSE2GsMCRNE/yRVCN4PAtW373oW4gQH08WCAjTSJvUI8ZnSmBMVpiJ831bYJusx3TpDPdpLjrYjo03T8IuOGZMNW5Il9nLZoRJedJMm2lVVfBQ9amVXCcrCTSt3DHF3K65gomdMPz5IvzHpGzPYK++OxwrJ5IRzAjrrMzScQU9ygYEKXO6dN+r0fHyw+hholSvOmU7YhOHqIhdH0Pao5bXl+WxK/W+YTqto1atXP4cRSJ+jQdh1gTH9QU78Y/qCz+UyEbCVUPW6FXtIGlZCbT/6nIbjikmJ96bqOMf6nLJTexsBKlAAAAAElFTkSuQmCC',
            color: '#6B7AED',
            key: 'music',
        },
        {
            iconColor: 'data:image/png;base64,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',
            iconWhite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM1SURBVHgB1ZmNddsgEMfPeR3AG1gb2J1A7gTpBsoG7gbKBu4GaidwO4GSCZwNUCdINrjePaHkQvg4kJymv/d4wvYBf+A4BAb4D0DEa0qPNh3go0MiG3zN46fMCtb0uKZU2a8eVqvVb7gQ1F5Lj1vn6ydNWS5cUerRj6G0hYVhwYH29prCB+tLMR7tLFxacDOnsI8WFoDq6YrrzxTMdDADKr+mdHpPwbNEW8HnOYIbLCPtb/72eJGbQJ3HuRWk2EAmifZO2ko6LMNAJgnB7CrpaERGNZZzDtTJvsohs5MiKL/FcBg1qA2fGN48tHQ4dryhdBT18ahtnMGJCZa23OEmJHiHl+HVNGN8kRuP4InWJ7rD5ekcwQfUC248No0r2uCydE79bcSWXWUrbLcRu7X0sSVpMwQz18K2wvh7TquZNi3cEPvvwRF8TJRrHMFG0c6ajU9YTo+BV0Ucp9lEyroz0qOOZk6oSx57cIzTx5RgYd8p2j2WLkLXDWorrsPRhzcRN2mdTtWO7TnR9hkwn87xwz5gd3TEGXwbVc6ejtQYx5SIlvHUJGyl8G3CFWrxW/SklCu6FxU3yjK1x3dbj52cwWhwuCKbAfT8Evkb0LF3BcPbE3YWLFp3JB+5tw1XrpgI1ZTBMS7fBuzuRD72ljew6AfQ8UR3HJNtzpWBHBTu9OCxGajun5xRDEiWaGm3Bz13U4aEDfT4QukHjJ3hz98pfRb2qTPhU867h1wovbJM1okGda8UzRX1/h50fj2IvOZkwfZ7IYg3GO8uinbnhHHUU9zJCpM9FI3E6O2Ihd6lzdQBfDmKpW6wnuuWPa0VBfZiVKSAkxVxg56zHZZfSfh4cxDoUSHa2laQAMctvsPlML5GalSKjgjd4DjlPS7P8yivnEZ5MXwLaLqBMexNLlDZ/M7md6BboCXwPfhzWHRFc6NnELvYB4Aj245E/5m+uJK/0g9s8BXytvZL800KDoLLrvg55N15478XXnZJjy9/hb038/52w3nXv7kY1PwRpBQeOlUvCde/fMjE5Xc5pselRlcp3mAZvE5aSjsoYAUzsaPEJxl+VvCyU04MMMb9B5vuxQmoiL9OmK7N3YjyUAAAAABJRU5ErkJggg==',
            color: '39C3F2',
            key: 'art',
        },

    ];

    const handleUpdateCategories = async () => {



        data.forEach(async cat => {
            const item = categories.find(element => element.key === cat.key)

            if (item) {
                const id = item._id;
                const values = {
                    color: cat.color,
                    iconColor: cat.iconColor,
                    iconWhite: cat.iconWhite,

                };
                const api = `/update-category?id=${id}`;
                try {
                    const res = await eventAPI.HandleEvent(api, values, 'put');
                } catch (error) {
                    console.log(error);
                }

            }
        })
    };

    return categories.length > 0 ? (
        <FlatList
            style={{ paddingHorizontal: 16 }}
            horizontal
            ListHeaderComponent={<>
                <ButtonComponent text='Update Categories' onPress={handleUpdateCategories} /></>}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item._id}
            renderItem={({ item, index }) => (

                <TagComponent
                    styles={{
                        marginRight: index === categories.length - 1 ? 28 : 12,
                        minWidth: 82,
                    }}
                    bgColor={isFill ? item.color : 'white'}
                    onPress={() =>
                        navigation.navigate('CategoryDetail', {
                            id: item._id,
                            title: item.title,
                        })
                    }
                    label={item.title}
                    icon={
                        <Image
                            source={{ uri: isFill ? item.iconWhite : item.iconColor }}
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    textColor={isFill ? 'white' : appColors.text2}
                />
            )}
        />
    ) : (
        <></>
    );
};

export default CategoriesList;