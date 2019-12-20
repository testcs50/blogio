import React from 'react';

const AddArticle = () => {
    return (
        <div>
            <form>
                <input type="text" name="title" />
                <textarea name="text" cols="30" rows="10" />
                <input type="submit" value="Добавить" />
            </form>
        </div>
    )
}

export default AddArticle;