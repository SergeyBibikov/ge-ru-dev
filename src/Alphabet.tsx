import React from 'react';
import './Alphabet.css';

export function Alphabet(props: any) {
    return (
        <div className={`alphabet section-wrapper ${props.isShown}`}>
            <div id="alphabet" className={`section-content ${props.isShown}`}>
                <table id="alphabetContent">
                    <tbody>
                        <tr>
                            <th className='ge'>Буква</th>
                            <th className='letterName'>Название</th>
                            <th className='ru'>Транскрипция</th>
                        </tr>
                        <tr>
                            <td className='ge'>ა</td>
                            <td className='letterName'>ani</td>
                            <td className='ru'>а</td>
                        </tr>
                        <tr>
                            <td className='ge'>ბ</td>
                            <td className='letterName'>bani</td>
                            <td className='ru'>б</td>
                        </tr>
                        <tr>
                            <td className='ge'>გ</td>
                            <td className='letterName'>gani</td>
                            <td className='ru'>г</td>
                        </tr>

                        <tr>
                            <td className='ge'>დ</td>
                            <td className='letterName'>doni</td>
                            <td className='ru'>д</td>
                        </tr>
                        <tr>
                            <td className='ge'>ე</td>
                            <td className='letterName'>eni</td>
                            <td className='ru'>э</td>
                        </tr>
                        <tr>
                            <td className='ge'>ვ</td>
                            <td className='letterName'>vini</td>
                            <td className='ru'>в</td>
                        </tr>
                        <tr>
                            <td className='ge'>ზ</td>
                            <td className='letterName'>zeni</td>
                            <td className='ru'>з</td>
                        </tr>
                        <tr>
                            <td className='ge'>თ</td>
                            <td className='letterName'>tani</td>
                            <td className='ru'>т</td>
                        </tr>
                        <tr>
                            <td className='ge'>ი</td>
                            <td className='letterName'>ini</td>
                            <td className='ru'>и</td>
                        </tr>
                        <tr>
                            <td className='ge'>კ</td>
                            <td className='letterName'>k`ani</td>
                            <td className='ru'>к`</td>
                        </tr>
                        <tr>
                            <td className='ge'>ლ</td>
                            <td className='letterName'>lazi</td>
                            <td className='ru'>л</td>
                        </tr>
                        <tr>
                            <td className='ge'>მ</td>
                            <td className='letterName'>mani</td>
                            <td className='ru'>м</td>
                        </tr>
                        <tr>
                            <td className='ge'>ნ</td>
                            <td className='letterName'>nari</td>
                            <td className='ru'>н</td>
                        </tr>
                        <tr>
                            <td className='ge'>ო</td>
                            <td className='letterName'>oni</td>
                            <td className='ru'>о</td>
                        </tr>
                        <tr>
                            <td className='ge'>პ</td>
                            <td className='letterName'>p`ari</td>
                            <td className='ru'>п`</td>
                        </tr>
                        <tr>
                            <td className='ge'>ჟ</td>
                            <td className='letterName'>zhani</td>
                            <td className='ru'>ж</td>
                        </tr>
                        <tr>
                            <td className='ge'>რ</td>
                            <td className='letterName'>rae</td>
                            <td className='ru'>р</td>
                        </tr>
                        <tr>
                            <td className='ge'>ს</td>
                            <td className='letterName'>sani</td>
                            <td className='ru'>с</td>
                        </tr>
                        <tr>
                            <td className='ge'>ტ</td>
                            <td className='letterName'>t`ani</td>
                            <td className='ru'>т`</td>
                        </tr>
                        <tr>
                            <td className='ge'>უ</td>
                            <td className='letterName'>uni</td>
                            <td className='ru'>у</td>
                        </tr>
                        <tr>
                            <td className='ge'>ფ</td>
                            <td className='letterName'>pari</td>
                            <td className='ru'>пэ</td>
                        </tr>
                        <tr>
                            <td className='ge'>ქ</td>
                            <td className='letterName'>kani</td>
                            <td className='ru'>к</td>
                        </tr>
                        <tr>
                            <td className='ge'>ღ</td>
                            <td className='letterName'>ghani</td>
                            <td className='ru'>гэ</td>
                        </tr>
                        <tr>
                            <td className='ge'>ყ</td>
                            <td className='letterName'>q`ari</td>
                            <td className='ru'>кʼ</td>
                        </tr>
                        <tr>
                            <td className='ge'>შ</td>
                            <td className='letterName'>shini</td>
                            <td className='ru'>ш</td>
                        </tr>
                        <tr>
                            <td className='ge'>ჩ</td>
                            <td className='letterName'>chini</td>
                            <td className='ru'>ч</td>
                        </tr>
                        <tr>
                            <td className='ge'>ც</td>
                            <td className='letterName'>tsani</td>
                            <td className='ru'>тс</td>
                        </tr>
                        <tr>
                            <td className='ge'>ძ</td>
                            <td className='letterName'>dzili</td>
                            <td className='ru'>дз</td>
                        </tr>
                        <tr>
                            <td className='ge'>წ</td>
                            <td className='letterName'>ts`ili</td>
                            <td className='ru'>ц`</td>
                        </tr>
                        <tr>
                            <td className='ge'>ჭ</td>
                            <td className='letterName'>ch`ari</td>
                            <td className='ru'>чʼ</td>
                        </tr>
                        <tr>
                            <td className='ge'>ხ</td>
                            <td className='letterName'>xani</td>
                            <td className='ru'>х</td>
                        </tr>
                        <tr>
                            <td className='ge'>ჯ</td>
                            <td className='letterName'>jani</td>
                            <td className='ru'>дж</td>
                        </tr>
                        <tr>
                            <td className='ge'>ჰ</td>
                            <td className='letterName'>hae</td>
                            <td className='ru'>х</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}