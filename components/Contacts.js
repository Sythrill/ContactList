class Contacts extends React.Component {
    render() {
        var contacts;
        contacts = this.props.items.map(function (contact) {
            return <Contact item={contact} key={contact.id}/>
        });

        return (
            <ul className="contactList">{contacts}</ul>
        )

    }
}

Contacts.propTypes = {
    items: React.PropTypes.array.isRequired
};