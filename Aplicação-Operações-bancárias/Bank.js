const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){
    user.transactions.push(transaction)

    balanceValue(transaction)
}

function balanceValue(transaction){
    if(transaction.type === "credit"){
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }

    return user.balance
}

function getHigherTransactionByType(type){

    let higherValue = 0
    let higherTransaction

    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    

    return higherTransaction
}

function getAverageTransactionValue() {

    let averageValue = 0
    

    for(let transaction of user.transactions){
        averageValue += transaction.value
    }

    return averageValue / user.transactions.length
}

function getTransactionsCount(){
    let transactionsCount= {
        credit: 0,
        debit: 0
    }

    for(let transaction of user.transactions){
        if(transaction.type === "credit"){
            transactionsCount.credit++
        }else {
            transactionsCount.debit++
        }
    }

    return transactionsCount
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) 

console.log(getHigherTransactionByType('credit')) 
console.log(getHigherTransactionByType('debit')) 

console.log(getAverageTransactionValue()) 

console.log(getTransactionsCount()) 