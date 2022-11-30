import * as React from 'react';

import './HomePage.css'

export function Features() {

  const directory = {
    root: {
      type: 'directory',
      name: 'root',
      subdirectories: {
        file1: {
          type: 'file',
          fileType: 'txt',
          name: 'file1',
        },
        documents: {
          type: 'directory',
          name: 'documents',
          subdirectories: {
            myStuff: {
              type: 'directory',
              name: 'myStuff',
              subdirectories: {}
            },
            document1: {
              type: 'file',
              fileType: 'html',
              name: 'document1'
            }
          }
        }
      }
    }
  }

  const toggleDir = (evt) => {
      const el = evt.currentTarget.parentNode?.querySelectorAll('.directory-level')[0]
      if (!el?.classList.contains('directory-level-open')) {
        el?.classList.add('directory-level-open')
      } else {
        el?.classList.remove('directory-level-open')
      }
    }

  return (
    <div className="outer-holder">
        {
          Object.keys(directory).map((label) => {
            return (
              <div className="new-level">
                <div
                  onClick={toggleDir}
                >{label}</div>
                {
                  directory[label].type === 'directory' && (
                    <div className="directory-level">
                      {
                        Object.keys(directory[label].subdirectories).map((label1) => {
                          return (
                            <div className="new-level">
                              <div onClick={toggleDir} >{label1}{directory[label].subdirectories[label1].type === 'file' ? '.' + directory[label].subdirectories[label1].fileType : ''}</div>
                              {
                                directory[label].subdirectories[label1].type === 'directory' && (
                                  <div className="directory-level">
                                    {
                                      Object.keys(directory[label].subdirectories[label1].subdirectories).map((label2 => {
                                        return (
                                          <div className="new-level">
                                            <div>{label2}</div>
                                          </div>
                                        )
                                      })) 
                                    }
                                  </div> 
                                )
                              }                     
                            </div>
                          )
                        }) 
                      }
                    </div>
                  )
                }              
              </div>
            )
          })
        }
    </div>
  );
}
