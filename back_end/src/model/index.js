const _ = require('lodash')
const {client} = require("../dataBase");
const {camelizeKeys} = require("../utils/snakeToCamel");

const getQueryFields = (toGet) => {
  let fields = []
  const values = []
  let valueProps = []
  Object.entries(toGet).forEach(([key, value], index) => {
    fields.push(_.snakeCase(key))
    values.push(value)
    valueProps.push(`$${+index + 1}`)
  })

  fields = fields.join(',')
  valueProps = valueProps.join(',')

  return {
    fields,
    valueProps,
    values
  }
}

const selectAll = async (toGet, tableName) => {
  const {fields, valueProps, values} = getQueryFields(toGet);
  const query = {
    text: `SELECT * FROM public.${tableName} WHERE ${fields} = ${valueProps}`,
    values: values
  };
  const res = await client.query(query)
  if(res.rows){
    const data = JSON.stringify(camelizeKeys(res.rows))
    return JSON.parse(data)
  }
  return res.rows
}

const selectOne = async (toGet, tableName) => {
  const rows = await selectAll(toGet, tableName)
  if(rows[0] !== undefined){
    const data = JSON.stringify(camelizeKeys(rows[0]))
    return JSON.parse(data)
  }
}

const insertAll = async (toGet, tableName) => {
  const {fields, valueProps, values} = getQueryFields(toGet);
  const query = {
    text: `INSERT INTO public.${tableName} (${fields})
           VALUES (${valueProps})
           RETURNING *`,
    values: values
  };
  const res = await client.query(query)
  return res.rows[0];
}

const updateAll = async (toGet, tableName, whereText) => {
  const {fields, valueProps, values} = getQueryFields(toGet);
  const query = {
    text: `UPDATE public.${tableName} 
            SET (${fields}) =
           (VALUES (${valueProps}))
            WHERE ${whereText}
           RETURNING *`,
    values: values
  };
  const res = await client.query(query)
  return res.rows[0];
}

const deleteRow = async (toGet, tableName, user) => {
  console.log('to get ', toGet, tableName, user)
  const {fields, valueProps, values} = getQueryFields(toGet);
  const query = {
    text: `DELETE FROM public.${tableName} WHERE ${fields} = ${valueProps} AND user_id = ${user}`,
    values: values
  };
  return await client.query(query);
}

module.exports = {
  selectOne,
  selectAll,
  insertAll,
  deleteRow,
  updateAll
}