// for testing sql queries 
const queryMinistryAll = 'Select * from ministry;';

// Acronym table sql queries
const queryAcronymsAllTEST = 'SELECT m.ministry_id, m.ministry_name, a.acronym_id, a.acronym, a.a_change_effective_date, m.is_current FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id Right JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY a.acronym ASC;';
const queryAcronymsAll = 'SELECT m.ministry_id, m.ministry_name, a.acronym_id, a.acronym, a.a_change_effective_date, m.is_current FROM ministry m fULL OUTER JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id fULL OUTER JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY a.acronym ASC;';
const queryAcronymById = 'SELECT m.ministry_id, m.ministry_name,a.acronym_id, a.acronym, a.a_change_effective_date, m.is_current FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON a.acronym_id = ma.acronym_id WHERE a.acronym_id =($1);';
const queryAcronymIdByMinistryId = 'SELECT a.acronym_id FROM acronym a JOIN ministry_acronym ma ON a.acronym_id =ma.acronym_id JOIN ministry m ON m.ministry_id = ma.ministry_id WHERE m.ministry_id =($1);';
const queryAcronymExistsCheck = 'SELECT a from acronym a WHERE UPPER(a.acronym) = UPPER($1);';
const queryAddAcronym = 'INSERT INTO acronym (acronym, a_change_effective_date) VALUES($1, $2);';
const queryAddMinistryAcronym = 'INSERT INTO ministry_acronym (ministry_id, acronym_id) VALUES($1, $2);';
const queryUpdateMinistryAcronym = 'UPDATE ministry_acronym SET acronym_id = ($1) WHERE ministry_id= ($2);';
const queryUpdateMinistryAcronymHistory = 'INSERT INTO ministry_history (ministry_id, ministry_id_history, acronym_id_history) VALUES ($1, $2, $3)';
// ministry table sql queries 
const queryMinistry = 'SELECT m.ministry_id, m.ministry_name, a.acronym_id, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m Left JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id LEFT JOIN acronym a ON a.acronym_id = ma.acronym_id ORDER BY m.ministry_name ASC;';
const queryMinistryById = 'SELECT m.ministry_id, m.ministry_name,a.acronym_id, a.acronym, m.m_change_effective_date, m.is_current FROM ministry m Left JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id LEFT JOIN acronym a ON a.acronym_id = ma.acronym_id WHERE m.ministry_id =$1;';
const queryMinistryExistsCheck = 'SELECT m from ministry m WHERE UPPER(m.ministry_name) = UPPER($1);';
const queryAddMinistry = 'INSERT INTO ministry (ministry_name, m_change_effective_date, is_current)  VALUES($1, $2, true);';
const queryAddMinistryReturning = 'INSERT INTO ministry (ministry_name, m_change_effective_date, is_current)  VALUES($1, $2, true) RETURNING ministry_id;';
const queryRetireMinistry = 'UPDATE ministry SET is_current = false WHERE ministry_id = $1;';
const queryEditMinistry = '';
const queryMinistryExistsCheckById = 'SELECT m from ministry m WHERE ministry_id = $1;';
const queryAddMinistryHistory = 'INSERT INTO ministry_history (ministry_id, ministry_id_history) VALUES($1, $2);';
const queryUpdateMinistryName = 'UPDATE ministry SET ministry_name =($1) WHERE ministry_id=($2);';
// history sql queries
const queryHistory ='Select m.ministry_id, m.ministry_name, m.m_change_effective_date, m.m_change_user, m.is_current, a.acronym, a.a_change_effective_date, mh.ministry_id_history FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON a.acronym_id = ma.acronym_id LEFT JOIN ministry_history mh ON m.ministry_id = mh.ministry_id ORDER BY m.ministry_name asc;';
const queryHistoryByMinId='Select m.ministry_id, m.ministry_name, m.is_current, a.acronym, a.a_change_effective_date, mh.ministry_id_history FROM ministry m JOIN ministry_acronym ma ON m.ministry_id = ma.ministry_id JOIN acronym a ON a.acronym_id = ma.acronym_id LEFT JOIN ministry_history mh ON m.ministry_id = mh.ministry_id WHERE m.ministry_id=($1);';
module.exports = {
  queryAddAcronym,
  queryAcronymById,
  queryAcronymExistsCheck,
  queryAcronymsAllTEST,
  queryAcronymsAll,
  queryMinistryAll,
  queryAddMinistry,
  queryMinistry,
  queryMinistryById,
  queryMinistryExistsCheck,
  queryMinistryExistsCheckById,
  queryRetireMinistry,
  queryEditMinistry,
  queryAddMinistryHistory,
  queryAddMinistryReturning,
  queryAddMinistryAcronym,
  queryUpdateMinistryAcronym,
  queryUpdateMinistryAcronymHistory,
  queryAcronymIdByMinistryId,
  queryUpdateMinistryName,
  queryHistory,
  queryHistoryByMinId
};