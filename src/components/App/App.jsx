import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import ShoppingList from '../ShoppingList/ShoppingList'
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/products.json'

export default function App() {
    const colors = ['#62cbc6', '#00abad', '#00858c', '#006073', '#004d61'];

    const [products, setProducts] = useState(productsMock.products);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const newSelectedProducts = products.filter(product => product.checked === true)
        setSelectedProducts(newSelectedProducts)
    }, [products])


    function handleToggle(id, checked) {
        const newProducts = products.map(product =>
            product.id === id
                ? { ...product, checked: !product.checked }
                : product
        )
        /*const newProducts = products.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    checked: !product.checked
                }
            } else {
                return product
            }
        })*/
        setProducts(newProducts)

    }

    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={
                        <ShoppingList
                            title="Produtos disponíveis"
                            products={products}
                            onToggle={handleToggle}
                        />}
                    middle={
                        <ShoppingList
                            title="Sua lista de compras"
                            products={selectedProducts}
                            onToggle={handleToggle}
                        />}
                    right={
                        <div>
                            estastisca
                            <LineChart
                                color={colors[0]}
                                title="saudavel"
                                percentage={80}
                            />
                            <LineChart
                                color={colors[1]}
                                title="Não tão saudavel assim"
                                percentage={20}
                            />
                            <LineChart
                                color={colors[2]}
                                title="Limpeza"
                                percentage={35}
                            />
                            <LineChart
                                color={colors[3]}
                                title="Outros"
                                percentage={15}
                            />
                        </div>
                    }
                />
            </Container>
        </Wrapper>
    )
}