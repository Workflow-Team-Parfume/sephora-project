const tabsStyle = {
    flexGrow: 1,
    maxWidth: 'none',
    '&.Mui-selected': {
        color: 'black',
        fontSize: '20px',
        textTransform: 'none'
    },
    '&:not(.Mui-selected)': {
        color: 'grey',
        fontSize: '20px',
        textTransform: 'none',
    }
}

export default tabsStyle;