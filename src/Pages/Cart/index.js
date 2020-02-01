import React from 'react';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUCT</th>
                        <th>QTT</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://secure-static.vans.com.br/medias/sys_master/vans/vans/h02/h4b/h00/h00/9543877296158/1003500430051U-01-BASEIMAGE-Midres.jpg"
                                alt="shoes"
                            />
                        </td>
                        <td>
                            <strong>shoes</strong>
                            <span>r$15651</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$54665</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finish order</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$12312</strong>
                </Total>
            </footer>
        </Container>
    );
}
