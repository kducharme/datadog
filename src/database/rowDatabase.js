// Manages all row data
const rowDatabase = Object.create(null, {
    loadRows: {
        value: function() {
            fetch("http://localhost:4000/rows");
        }
    }
})

export default rowDatabase;