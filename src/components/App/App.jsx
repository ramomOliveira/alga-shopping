
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import ShoppingList from '../ShoppingList/ShoppingList'
import { Container, Wrapper } from './App.styles'

import extractPercentage from '../../utils/extractPercentage'
import Calculator from '../Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts, selectSelectedProducts, selectSelectedProductTotalPrice } from '../../store/Products/Products.selectors'
import { toggleProduct } from '../../store/Products/Products.actions'

export default function App() {
    const dispatch = useDispatch();
    const colors = ['#62cbc6', '#00abad', '#00858c', '#006073', '#004d61'];

    const products = useSelector(selectAllProducts);
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductTotalPrice)

    function handleToggle(id) {
        dispatch(toggleProduct(id))

    }

    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={
                        <ShoppingList
                            title="Produtos disponíveis"

                            onToggle={handleToggle}
                        />}
                    middle={
                        <ShoppingList
                            title="Sua lista de compras"
                            displayOnlySelected
                            onToggle={handleToggle}
                        />}
                    right={
                        <div>
                            estastisca
                            <LineChart
                                color={colors[0]}
                                title="saudavel"
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts.filter(product => product.tags.includes('healthy')).length
                                )}
                            />
                            <LineChart
                                color={colors[1]}
                                title="Não tão saudavel assim"
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts.filter(product => product.tags.includes('junk')).length
                                )}
                            />
                            <LineChart
                                color={colors[2]}
                                title="Limpeza"
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts.filter(product => product.tags.includes('cleaning')).length
                                )}
                            />
                            <LineChart
                                color={colors[3]}
                                title="Outros"
                                percentage={extractPercentage(
                                    selectedProducts.length,
                                    selectedProducts.filter(product => product.tags.includes('others')).length
                                )}
                            />

                            <div style={{ marginTop: 12 }}>
                                <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364a' }}>
                                    previsão de gastos:
                                </h2>
                                <div style={{ fontSize: 24 }}>
                                    {totalPrice.toLocaleString('pt-br', {
                                        minimumFractionDigits: 2,
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </div>

                                <Calculator />

                            </div>
                        </div>
                    }
                />
            </Container>
        </Wrapper>
    )
}