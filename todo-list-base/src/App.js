import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './components/Item';
import Notify from './components/Notify';

const getLocalTodo = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(list);
    }
    return [];
};

function App() {
    const [value, setValue] = useState('');
    const [notify, setNotify] = useState({
        show: false,
        msg: '',
        type: '',
    });
    const [list, setList] = useState(getLocalTodo());
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState();
    const inputRef = useRef();

    const showNotify = (show = false, msg = '', type = '') => {
        setNotify({
            show,
            msg,
            type,
        });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            showNotify(true, 'Please enter', 'success');

            return;
        }
        const newList = [...list, { id: uuidv4(), value }];
        setList(newList);
        setValue('');
        showNotify(true, 'Add value success!', 'success');
        inputRef.current.focus();
    };

    const handleDel = (e, i) => {
        e.preventDefault();
        if (isEditing) return;
        const newList = list.filter((l) => l.id !== i);
        setList(newList);
        showNotify(true, 'Item Deleted', 'danger');
        inputRef.current.focus();
    };

    const handleEdit = (e, i) => {
        e.preventDefault();
        setIsEditing(true);
        setEditId(i);
        let item = list.find((l) => l.id === i);
        if (item) {
            setValue(item.value);
            inputRef.current.focus();
        } else {
            return;
        }
    };

    const handleSubmitEdit = (e, i) => {
        e.preventDefault();
        const newList = list.map((l) => {
            if (l.id === i) {
                l.value = value;
                return l;
            }

            return l;
        });

        setList(newList);
        setValue('');
        setIsEditing(false);
        setIsEditing(false);
        showNotify(true, 'Value changed', 'success');
        inputRef.current.focus();
    };

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        if (list.length === 0) {
            setIsEditing(false);
            setValue('');
            inputRef.current.focus();
        }
    }, [list]);

    return (
        <div className='App'>
            {notify.show && (
                <Notify list={list} removeNotify={showNotify} {...notify} />
            )}
            <h4 className='App__title'>Todo List Base</h4>
            <form className='App__control'>
                <input
                    type='text'
                    placeholder='e.g. wash the dishes'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='App__input'
                    ref={inputRef}
                />
                {isEditing ? (
                    <button
                        className='btn small'
                        onClick={(e) => handleSubmitEdit(e, editId)}
                    >
                        Edit
                    </button>
                ) : (
                    <button className='btn small' onClick={handleAdd}>
                        Add
                    </button>
                )}
            </form>

            <div className='App__content'>
                {list.map((item) => (
                    <Item
                        key={item.id}
                        {...item}
                        handleDel={handleDel}
                        handleEdit={handleEdit}
                        isEditing={isEditing}
                    />
                ))}
            </div>
            {list.length > 0 ? (
                <button
                    className='App__clear btn small'
                    onClick={() => setList([])}
                >
                    Clear Items
                </button>
            ) : null}
        </div>
    );
}

export default App;
