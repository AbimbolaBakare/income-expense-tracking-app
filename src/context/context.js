import React, { useEffect, useState, useReducer, createContext } from "react";
import config, { db } from "../service/firebase.js";
import contextReducer from './contextReducer';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [document, setDocument] = useState({})
  const [transactions, dispatch] = useReducer(contextReducer, document);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  useEffect(() => {
    config.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
      getDocument(user);
    });

  }, []);

  async function getDocument(user) {
    if (!user) return null;
    try {
      const newDoc = await db.doc(`Users/${user.uid}`).collection('transactions').get();
      const mappedData = newDoc.docs.map(doc => doc.data());
      setDocument(mappedData)
    } catch (error) {
      console.error("Error fetching user", error);
    }
  }

  if (pending) {
    return <>Please wait...</>
  }
  return (
    <AppContext.Provider
      value={{
        currentUser,
        document,
        deleteTransaction,
        addTransaction,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};